import './header.css'

export default function Header() {
  const publicPath = process.env.PUBLIC_URL;
  return (
    <div className='header'>
        <div className="headerTitle">
        <span className="headerTitleSm">Kindred Spirits,</span>
        <span className="headerTitleLg"> Timeless Bonds</span>
    </div>
     <img className='headerimg' src={`${publicPath}/IMG-20241212-WA0036.jpg`} alt="" />
    </div>
  )
}
