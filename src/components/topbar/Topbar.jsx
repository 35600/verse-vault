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
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUser(user);

      const { data, error } = await supabase
        .from("profiles")
        .select("avatar_url")
        .eq("id", user.id)
        .single();

      if (!error && data?.avatar_url) {
        setAvatarUrl(data.avatar_url);
      }
    };

    fetchUser();
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="top">
      {/* Left: Social Icons */}
      <div className="topLeft">
        <i className="topicon fa fa-facebook"></i>
        <i className="topicon fa fa-pinterest"></i>
        <i className="topicon fa fa-twitter"></i>
        <i className="topicon fa fa-instagram"></i>
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
            <img className="topimg" src={avatarUrl} alt="User profile" />
          ) : (
            <i className="fa fa-user topimg" aria-hidden="true"></i>
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
