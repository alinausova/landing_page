import React from 'react';
import './App.css';
import Blob from "./components/blob/Blob";
import Title from "./components/title/Title";
import Card from "./components/card/Card";
import PictureCard from "./components/picture/PictureCard";

import siemens from './assets/siemens-logo.png';
import allianz from './assets/allianz-logo.png';
import bmw from './assets/bmw-logo.png';
import eos from './assets/eos-logo.svg';
import tscnet from './assets/tscnet-logo.png';
import vodafone from './assets/vodafone-logo.png';
import roche from './assets/roche-logo.png';
import AnotherBlob from "./components/blob/AnotherBlob";

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
            <span className="subtitle-text"> <br/> ● ● ● </span>
          </div>


        </div>

      </div>

      <div className="second-box">

        <div className="intro">
          <div className="intro-text-box">
          <div className="intro-title">
            About me
          </div>
          <div className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

            <div className="right-align">
              <div className="intro-title">
                My interests and experience
              </div>
              <div className="intro-tags">
                <span className="intro-text-card"> prototyping </span>
                <span className="intro-text-card"> web-development </span>
                <span className="intro-text-card"> Progressive web Apps </span>
                <span className="intro-text-card"> iOS apps </span>
                <span className="intro-text-card"> Cross-platform apps </span>
                <span className="intro-text-card"> android apps </span>
                <span className="intro-text-card"> UI/UX design</span>
                <span className="intro-text-card"> Design thinking </span>
                <span className="intro-text-card"> ARKit </span>
                <span className="intro-text-card"> Agile </span>
                <span className="intro-text-card"> Scrum</span>
              </div>
            </div>
          </div>
          <PictureCard/>

        </div>
        <div className="divider"/>

        <div  className="intro-title padding-top padding-bottom" >
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

        <div className="card-box padding-bottom" >
          <Card>
            <div className="card-content">
              <div className="illustrator-logo"/>
              <span> Adobe <br/> Illustrator </span>
            </div>
          </Card>
          <Card>
            <div className="card-content">
              <div className="figma-logo"/>
              <span> Figma </span>
            </div>
          </Card>
          <Card>
            <div className="card-content">
              <div className="xd-logo"/>
              <span> Adobe XD </span>
            </div>
          </Card>
        </div>

      </div>

      <div className="third-box" id="another_blob_box">
        <div className="background-circle-1"/>
        <div className="background-circle-2"/>
        <div className="background-circle-3"/>

        <AnotherBlob/>

        <div className="divider-purple"/>
        <div className="divider-purple-small"/>

        <div className="third-box-title padding-top">
          Worked on applications with following clients
        </div>

        <div className="companies-box">
          <img className="company-logo-card" src={siemens} alt="Logo" width="160px" />
          <img className="company-logo-card" src={allianz} alt="Logo" width="160px" />
          <img className="company-logo-card" src={vodafone} alt="Logo" width="160px" />
          <img className="company-logo-card" src={bmw} alt="Logo" width="80px" />
          <img className="company-logo-card" src={tscnet} alt="Logo" width="160px" />
          <img className="company-logo-card" src={eos} alt="Logo" width="130px" />
          <img className="company-logo-card" src={roche} alt="Logo" width="100px" />
        </div>

        <div className="divider-dark"/>
      </div>
    </div>
  );
};

export default App;
