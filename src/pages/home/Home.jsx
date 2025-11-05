
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';


import './home.css';

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
    <Posts/>
    </div>
    <footer className="funnyFooter">
   <p>If you’ve made it this far, you either really love us… or you lost the remote.</p>
   </footer>
    </>
    )}