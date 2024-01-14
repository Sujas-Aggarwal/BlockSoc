import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Events from "../events/Events";
import Img from '/src/assets/meeting.svg'
import Img2 from '/src/assets/meeting2.jpg'
function Home() {
  return (
    <div className="home container">
      <div className="get-started container">
        <div className="wrapper">
          <div className="get-started-info">
            <div className="get-started-text">
              <mark>Blockchain Technology?</mark>
              <br /> This is a great place to start
            </div>
            <img
              className="get-started-svg"
              alt=""
              src={Img}
            />
          </div>
          <Link className="styled-btn">Get Started</Link>
        </div>
      </div>
      <section  className="get-started page-two container">
        <div className="wrapper">
          <div className="get-started-info">
          <img
              className="get-started-svg"
              alt=""
              src={Img2}
            />
            <div className="get-started-text">
              <h1>BC106</h1>
              <h2>Demystifying Blockchains</h2>
              around 300 students of IITD successfully completed this cohort.
              gaining deep insights across technological & philosophical
              perspectives of blockchain & web3
            </div>
          </div>
          <Link to={"/"} className="styled-btn">View Course</Link>
        </div>
      </section>
      <Events embeded/>
    </div>
  );
}

export default Home;
