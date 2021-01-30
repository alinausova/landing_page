import React from 'react';
import './App.css';
import Blob from "./components/blob/Blob";
import Title from "./components/title/Title";
import Card from "./components/card/Card";
import PictureCard from "./components/picture/PictureCard";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span>
          ● Alina Usova
        </span>
        <span>
          <a href="https://www.linkedin.com/in/alina-usova-21868a165/">
            LinkedIn
          </a>
        </span>
      </div>
      <div className="first-box">
        <Blob/>
        <div className="title-main">
          <Title open={true} lineHeight={120}>
            <span className="big-title-text"> Hello there! </span>
          </Title>
          <Title open={true} lineHeight={80}>
            <span> I am a mobile and web developer </span>
            <span> passionate about creating beautiful</span>
            <span> user friendly applications</span>
          </Title>
          <div className={"subtitle"}>
            <span className="subtitle-text" >
            Currently working at <a href="https://motius.de/">Motius</a> as a Frontend developer <br/>
          </span>

            <span className="subtitle-text"> and studying MSc. Informatics at Technical University of Munich</span>
          </div>

        </div>

      </div>

      <div className="second-box">

        <div className="intro">
          <div className="intro-text-box">
          <div className="intro-title">
            Lorem ipsum dolor sit amet
          </div>
          <div className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

            <div className="right-align">
              <div className="intro-title">
                Lorem ipsum dolor sit amet
              </div>
              <div className="intro-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
          <PictureCard/>

        </div>
        <div className="divider">

        </div>

        <div  className="intro-title padding-top" >
          Experienced with following tools
        </div>

        <div className="card-box">

          <Card>
            <div className="card-content">
              <div className="react-logo"/>
              <span> React.js </span>
            </div>
          </Card>
          <Card>
            <div className="card-content">
              <div className="vue-logo"/>
              <span> Vue.js </span>
            </div>
          </Card>
          <Card>
            <div className="card-content">
              <div className="pwa-logo"/>
              <span> Progressive Web Apps </span>
            </div>
          </Card>
        </div>

        <div className="card-box">
          <Card>
            <div className="card-content">
              <div className="swift-logo"/>
              <span> Swift </span>
            </div>
          </Card>
          <Card>
            <div className="card-content">
              <div className="kotlin-logo"/>
              <span> Kotlin </span>
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
}

export default App;
