import React from 'react'; 
import './sidebar.css';
 export default function AboutUsSection(){ 
    return ( 
    <> 
    <div className="about-us-wrapper"> 
      <h2 className="about-title">About Us</h2>
       <p className="about-subtitle">We are a community committed to faith, fellowship, and spiritual growth.</p>
        <img src="https://placehold.co/600x250" alt="About Us" className="about-image" />
         <div className="main-content"> <p> Our group meets weekly to study scripture, share testimonies, and support one another in our walk with God. <strong> We welcome everyone</strong> — whether you're new to faith or seeking deeper understanding. </p>
         <p> Through prayer, worship, and discipleship, we aim to build a strong foundation rooted in love and truth. </p>
          </div>
           <div className="cta-buttons"> 
            <button className="cta-button primary-cta">Join Us</button> <button className="cta-button secondary-cta">Learn More</button> 
            </div> 
            </div>
             </> ); }