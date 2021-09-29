import logo from './logo.svg';
import './App.css';
import arrow from './assets/vector.png';
import blockSuit from './assets/block-suit.png';

function MdiFacebook(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill="currentColor"></path></svg>
  )
}

function MdiTwitter(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor"></path></svg>
  )
}

function MdiInstagram(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" fill="currentColor"></path></svg>
  )
}

function App() {
    

  
  return (
    <div className="">
      <div className="left-side">
        <h2 className="logo-text">Xae</h2>
        <div className="social-media-bar">
          <div className="facebook-logo">
            {MdiFacebook()}
          </div>
          <div className="instagram-logo">
            {MdiInstagram()}
          </div>
          <div className="twitter-logo">
            {MdiTwitter()}
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="navbar"></div>
        <div className="konten">
        <div className="spacesuit-photo"></div>
        {/* <div className=""></div> */}
          <img src={blockSuit} className="spacesuit-background"/>
          
          
          <h3 className="text-title">Adventure Together</h3>
          <p className="text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras nullam porta id dolor arcu, quis.</p>
          <div className="footer-content">
          </div>
          <div className="footer-image"></div>
          <div className="exploration-header">Exploration</div>
          <div className="exploration-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id potenti faucibus nec, rhoncus, vulputate</div>
          <div className="vector-arrow">
            <img src={arrow}></img>
          </div>
          <div className="footprint-header">Footprint</div>
          <div className="footprint-text">Lorem ipsum dolor sit amet, consectetur </div>
        </div>
      </div>
    </div>    
  );
}

export default App;
