import './post.css';

export default function Post() {
  const publicPath = process.env.PUBLIC_URL;

  return (
    <div className='post'>
      <div>
        <img className='postImg' src={`${publicPath}/IMG-20241212-WA0036.jpg`} alt="Classy profile" />
        <div className="postInfo">
          <div className="postCats"></div>
          <span className="postTitle">Bound by Faith, Strengthened by Friendship</span>
          <hr />
          <span className="postDate">1 year ago</span>
        </div>
        <p className="postDesc">From our first gathering to today, your presence has made this journey beautiful.</p>
      </div>

      <div>
        <img className='postImg' src={`${publicPath}/IMG-20241212-WA0017.jpg`} alt="" />
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
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0026.jpg`} alt="" />
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
        <img className='postImg' src={`${publicPath}/IMG-20241213-WA0035.jpg`} alt="" />
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
        <div className="image-crop">
          <img src={`${publicPath}/IMG-20241212-WA0034.jpg`} alt="Cropped" className="postImg" />
        </div>
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
