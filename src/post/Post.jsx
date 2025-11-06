import './post.css';

export default function Post() {
  const publicPath = process.env.PUBLIC_URL;

  return (
    <div className='post'>
      <div>
        {/* ALT TAG ADDED: Descriptive */}
        <img className='postImg' src={`${publicPath}/IMG-20241212-WA0036.jpg`} alt="Portrait of a young woman with a focused, classy expression" />
        <div className="postInfo">
          <div className="postCats"></div>
          <span className="postTitle">Bound by Faith, Strengthened by Friendship</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">From our first gathering to today, your presence has made this journey beautiful.</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20241212-WA0017.jpg`} alt="Three youths standing together, smiling, symbolizing a legacy in motion" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Ivy</span>
            <span className="postCat">Henry</span>
            <span className="postCat">Kerry</span>
          </div>
          <span className="postTitle">Legacy in Motion</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">Every youth group needs its anchors...</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0026.jpg`} alt="Portrait of Grace, known as the sweetheart of the group" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Grace</span>
          </div>
          <span className="postTitle">The Sweetheart Who Always Gets Blamed.</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">Too kind to lie, too loyal to win...</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0035.jpg`} alt="A candid photo of Faith and Grace, the sleuth sisters" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Grace</span>
            <span className="postCat">Faith</span>
          </div>
          <span className="postTitle">The Sleuth Sisters</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">Sharp, intuitive, and always in sync...</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0028.jpg`} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Faith</span>
          </div>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">With effortless charm and a spark...</p>
      </div>

      <div>
        {/* Removed unnecessary image-crop div wrapper */}
        {/* ALT TAG ADDED */}
        <img src={`${publicPath}/IMG-20241212-WA0034.jpg`} alt="" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Big T</span>
            <span className="postCat">jeff</span>
          </div>
          <span className="postTitle">The Gentle Trio</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">Two brothers with quiet strength...</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0015.jpg`} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Wanita</span>
          </div>
          <span className="postTitle">Bound by Faith, Strengthened by Friendship</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">From our first gathering to today...</p>
      </div>

      <div>
        {/* IMPORTANT: Video should have descriptive text/transcripts for full accessibility, but for a portfolio, this is often acceptable. */}
        <video className="postVideo" controls autoPlay loop>
          <source src={`${publicPath}/VID-20250907-WA0005.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="postInfo">
          <span className="postTitle">- Moves and Motives</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">What began as playful strategy...</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0008.jpg`} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Lerah</span>
          </div>
          <span className="postTitle">Childish Whirl</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">A stomp, a pout, a playful glare...</p>
      </div>

      <div>
        {/* ALT TAG ADDED */}
        <img className='postImg' src={`${publicPath}/IMG-20250908-WA0021.jpg`} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Jeff</span>
          </div>
          <span className="postTitle">Chill guy</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">No rush, no fuss — just quiet skill...</p>
      </div>
    </div>
  );
}