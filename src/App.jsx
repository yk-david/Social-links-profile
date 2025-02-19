import Link from "./components/Link";
import avatar from "./images/avatar-jessica.jpeg";
import data from "./data.js";

import "./App.css";

export default function App() {
  return (
    <div className="device">
      <main className="app">
        <div className="profil-div">
          <img className="profil-img" src={avatar} alt='avatar image' />
        </div>
        
        <div className="name-section">
          <h1 className="name">Jessica Randall</h1>
          <p className="location">London, United Kingdom</p>
        </div>
        
        <div className='career-section'>
          <p className='career-summary'>"Front-end developper and avid reader."</p>
        </div>
        
        <div className="link-section">
          {data.map((list) => {
            return <Link {...list} />;
          })}
        </div>
      </main>
    </div>
  );
}
