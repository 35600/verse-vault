import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import "./write.css";

export default function Write() {
   const publicPath = process.env.PUBLIC_URL;
  const [mediaFiles, setMediaFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [posts, setPosts] = useState([]);

  const CLOUD_NAME = "dfgkoo57u";
  const UPLOAD_PRESET = "blog-uploads";

  // Upload media to Cloudinary
  const handleMediaUpload = async (e) => {
    const files = Array.from(e.target.files);
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const uploaded = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", UPLOAD_PRESET);
          formData.append("folder", "projo");

          const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
            method: "POST",
            body: formData,
            headers: { Accept: "*/*" },
          });

          const data = await res.json();
          if (!res.ok || !data.secure_url) throw new Error(data.error?.message || "Upload failed");

          return {
            url: data.secure_url,
            type: file.type.startsWith("video") ? "video" : "image",
          };
        })
      );

      setMediaFiles(uploaded);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Submit post to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!title.trim() || !story.trim()) {
      setError("Title and story are required.");
      setLoading(false);
      return;
    }

    const postData = {
      title,
      story,
      media: mediaFiles,
      username: localStorage.getItem("username") || "Anonymous",
    };

    try {
      const { error: dbError } = await supabase.from("posts").insert([postData]);
      if (dbError) throw dbError;

      setSuccess(true);
      setTitle("");
      setStory("");
      setMediaFiles([]);
      fetchPosts(); // Refresh post list
    } catch (err) {
      setError("Failed to save post.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts from Supabase
  const fetchPosts = async () => {
    const { data, error } = await supabase.from("posts").select("*").order("timestamp", { ascending: false });
    if (!error) setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="write">
      <img className="writeImg" src={`${publicPath}/IMG-20241212-WA0021.jpg`} alt="Banner" />

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*,video/*"
            multiple
            onChange={handleMediaUpload}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>

        <div className="mediaPreview">
          {mediaFiles.map((media, index) =>
            media.type === "image" ? (
              <img key={index} src={media.url} alt={`Uploaded ${index + 1}`} className="writeImg" />
            ) : (
              <video key={index} controls className="writeVideo">
                <source src={media.url} type="video/mp4" />
              </video>
            )
          )}
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          ></textarea>
        </div>

        <button className="writeSubmit" disabled={loading}>
          {loading ? "Publishing..." : "Publish"}
        </button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Post published successfully!</p>}
      </form>

      {/* Display posts below */}
      <div className="postList">
        <h2>Published Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="postCard">
              <h3>{post.title}</h3>
              <p><strong>By:</strong> {post.username}</p>
              <p>{post.story}</p>
              <div className="mediaPreview">
                {post.media.map((media, i) =>
                  media.type === "image" ? (
                    <img key={i} src={media.url} alt={`Media ${i + 1}`} className="writeImg" />
                  ) : (
                    <video key={i} controls className="writeVideo">
                      <source src={media.url} type="video/mp4" />
                    </video>
                  )
                )}
              </div>
              <small>{new Date(post.timestamp).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
