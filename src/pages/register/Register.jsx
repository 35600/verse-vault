import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const { error: signUpError } = await supabase.auth.signUp({ email, password });
      if (signUpError) {
        setMessage(`❌ Signup error: ${signUpError.message}`);
        return;
      }

      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      const userId = session?.user?.id;

      if (sessionError || !userId) {
        setMessage("⚠️ Unable to retrieve user session. Please log in again.");
        return;
      }

      const { error: profileError } = await supabase.from("profiles").insert([
        { id: userId, username }
      ]);

      if (profileError) {
        setMessage(`❌ Profile creation error: ${profileError.message}`);
      } else {
        setMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setMessage("❌ Unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="Register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="registerInput"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          className="registerInput"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          className="registerInput"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="registerButton" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>

      {message && <p className="registerMessage">{message}</p>}

      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  );
}
