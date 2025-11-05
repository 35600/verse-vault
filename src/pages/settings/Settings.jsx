import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./settings.css";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        navigate("/login");
        return;
      }

      setEmail(user.email);

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Profile fetch error:", profileError.message);
        setMessage("No profile found.");
        return;
      }

      setUsername(profile.username || "");
    };

    loadProfile();
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const updates = {
      username,
      updated_at: new Date().toISOString(),
    };

    const { error: profileError } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", user.id);

    if (profileError) {
      setMessage("Failed to update profile.");
      return;
    }

    if (password.trim()) {
      const { error: authError } = await supabase.auth.updateUser({
        password: password.trim(),
      });

      if (authError) {
        setMessage("Profile updated, but password change failed.");
        return;
      }
    }

    setMessage("Profile updated successfully.");
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <h2>Update Your Account</h2>
        <form className="settingsForm" onSubmit={handleUpdate}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Email (read-only)</label>
          <input type="email" value={email} disabled />

          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank to keep current password"
          />

          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>

        {message && <p className="settingsMessage">{message}</p>}
      </div>
    </div>
  );
}
