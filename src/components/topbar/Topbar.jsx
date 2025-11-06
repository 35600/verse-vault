import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./Topbar.css";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) return;

      setUser(user);

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("avatar_url")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.warn("Profile fetch error:", profileError.message);
      } else if (profile?.avatar_url) {
        setAvatarUrl(profile.avatar_url);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="top">
      {/* Left: Social Icons */}
      <div className="topLeft">
        {["facebook", "pinterest", "twitter", "instagram"].map((platform) => (
          <i key={platform} className={`topicon fa fa-${platform}`} />
        ))}
      </div>

      {/* Center: Navigation Links */}
      <div className="topCenter">
        <ul className={`topList ${menuOpen ? "open" : ""}`}>
          <li className="topListItem">
            <Link className="link" to="/" onClick={toggleMenu}>HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings" onClick={toggleMenu}>SETTINGS</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/post/:postId" onClick={toggleMenu}>CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" onClick={toggleMenu}>WRITE</Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>LOGOUT</li>
          )}
          <i className="fa fa-times menuCloseIcon" onClick={toggleMenu}></i>
        </ul>
      </div>

      {/* Right: Profile or Auth Links */}
      <div className="topRight">
        {user ? (
          avatarUrl ? (
            <img className="topimg" src={avatarUrl} alt="User avatar" />
          ) : (
            <i className="fa fa-user topimg" aria-hidden="true" />
          )
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
          </ul>
        )}
        <i className="fa fa-bars menuOpenIcon" onClick={toggleMenu}></i>
        <i className="fa fa-search topSearchIcon"></i>
      </div>
    </div>
  );
}
