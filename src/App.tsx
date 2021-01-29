import React from 'react';
import './App.css';
import Blob from "./components/blob/Blob";
import Title from "./components/title/Title";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span>
          Alina Usova
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
          {/*<Title  open={true} lineHeight={60}>*/}
          <div className={"subtitle"}>
            <span className="subtitle-text" >
            Currently working at <a href="https://motius.de/">Motius</a> as a Frontend developer <br/>
          </span>

            <span className="subtitle-text"> and studying MSc. Informatics at Technical University of Munich</span>
          </div>

          {/*</Title>*/}
        </div>

      </div>

      <div className="second-box">
        <div className="card-box">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

    </div>
  );
}

export default App;
