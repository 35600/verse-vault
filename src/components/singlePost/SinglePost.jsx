import React, { useState } from 'react';
import './singlePost.css';

function SinglePost() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const leaders = [
    {
      name: 'Ivy Oulu',
      title: 'Sunday School Teacher & Group Founder',
      description: 'Leads our deep-dive theological studies.',
      image: 'https://placehold.co/100x100/1e1b4b/facc15?text=IO',
    },
    {
      name: 'Monique K',
      title: 'Sunday School Teacher & Group Founder',
      description: 'Facilitates discussion and fellowship for members.',
      image: 'https://placehold.co/100x100/1e1b4b/facc15?text=MK',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyWSq8YhMH9mAXBUkXAtoiOs8gQ5nQlwzqS-Vz8uGngpEbA7Q1Jd4vyQTUdbm6GKc1d/exec'; // Replace with your actual script URL

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="contact-card">
      <section className="leaders-section">
        <header className="leaders-header">
          <h2 className="leaders-title">Our Leadership</h2>
          <p>Meet the dedicated individuals who guide our studies, fellowship, and ministry.</p>
        </header>
        <div className="leader-list">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <img
                src={leader.image}
                alt={leader.name}
                className="leader-image"
                onError={(e) =>
                  (e.currentTarget.src = 'https://placehold.co/100x100/1e1b4b/facc15?text=User')
                }
              />
              <div className="leader-info">
                <h4>{leader.name}</h4>
                <p>{leader.title}</p>
                <p>{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mission-box">
          <h4>Our Mission</h4>
          <p>"To know God and to make Him known through evangelism and discipleship."</p>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="form-section">
        <header className="form-header">
          <h3>Send a Prayer Request</h3>
          <p>We promise to keep your needs confidential and lift them up in prayer.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Prayer Request or Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" disabled={status === 'loading'} className="submit-button">
            {status === 'loading' ? 'Sending...' : 'Submit Prayer Request'}
          </button>
          {status === 'success' && (
            <p className="status-message status-message-success">
              ✅ Request received. We will be praying for you!
            </p>
          )}
          {status === 'error' && (
            <p className="status-message status-message-error">
              ⚠️ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default SinglePost;
