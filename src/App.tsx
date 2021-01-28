import React from 'react';
import './App.css';
import Blob from "./components/blob/Blob";
import Title from "./components/title/Title";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <div className="first-box">
        <Blob/>
        <Title open={true}>
          <span> A mobile and web developer </span>
          <span> passionate about creating beautiful</span>
          <span> user friendly applications</span>
        </Title>
      </div>

      <div className="card-box">
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  );
}

export default App;
