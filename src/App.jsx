import Link from "./components/Link";
import avatar from "./images/avatar-jessica.jpeg";
import data from "./data.js";

import "./App.css";

export default function App() {
  return (
    <div className="device">
      <main className="app">
        <section className="profil-section">
          <img className="profil-img" src={avatar} />
        </section>
        <section className="name-section">
          <h1 className="name">Jessica Randall</h1>
          <p className="location">London, United Kingdom</p>
        </section>
        <section className='career-section'>
          <p className='career-summary'>"Front-end developper and avid reader."</p>
        </section>
        <section className="link-section">
          {data.map((list) => {
            return <Link {...list} />;
          })}
        </section>
      </main>
    </div>
  );
}
