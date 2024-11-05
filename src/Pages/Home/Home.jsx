import React from 'react';
import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Titlecard from '../../Components/Titlecards/Titlecard';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="banner-img" />
        <div className="hero_caption">
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man
            living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play Icon" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info Icon" /> More Info
            </button>
          </div>
          <Titlecard  />
        </div>
      </div>
      <div className="more-cards">
        <Titlecard key="blockbuster" title={"Blockbuster Movies" }category={"top_rated"} />
        <Titlecard key="netflix-only" title={"Only on Netflix"} category={"popular"} />
        <Titlecard key="upcoming" title={"Upcoming"} category={"upcoming"} />
        <Titlecard key="top-picks" title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
