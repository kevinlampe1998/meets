import Person from "./Person"
import { useState } from "react";
import data from "./data/data";
import "./App.css";

function App() {
  const [persons, setPersons] = useState(data);
  console.log(data);

  const smileyFly = (event) => {
    console.log(event.target.innerHTML);
    const smiley = document.querySelector("#smiley-fly");
    console.log(smiley);
    smiley.innerHTML = event.target.innerHTML;
    smiley.animate([
      {
        transform: "translateY(0px)"
      },
      {
        transform: "translateY(-500px)"
      }
    ], {
      duration: 2000
    });
    setTimeout(() => smiley.innerHTML = "", 2000);
  };

  return (
    <main>
      <div className="top-element">
        <span>&#128193;</span>
        <span>
          <span className="pd-right-10">&#x25A6;</span>
          <span>Breakout rooms are in session</span>
        </span>
      </div>
      <div className="persons-container">
        {persons.map((e, i) => (
          <Person key={i} firstName={e.firstName} lastName={e.lastName} picture={e.picture} />
        ))}
      </div>
      <div className="smiley-container">
        <span onClick={smileyFly} >💖</span>
        <span onClick={smileyFly} >&#128077;</span>
        <span onClick={smileyFly} >&#127881;</span>
        <span onClick={smileyFly} >&#128079;</span>
        <span onClick={smileyFly} >😂</span>
        <span onClick={smileyFly} >&#128558;</span>
        <span onClick={smileyFly} >&#128546;</span>
        <span onClick={smileyFly} >🤔</span>
        <span onClick={smileyFly} >&#128078;</span>
      </div>
      <span className="bottom-middle">
        <span className="call-and-video">
          <span>&#94;</span>
          <span className="bg-red">&#128263;</span>
        </span>
        <span className="call-and-video">
          <span>&#94;</span>
          <span className="bg-red">&#128249;</span>
        </span>
        <span className="round-buttons">&#169;&#169;</span>
        <span className="round-buttons">&#128515;</span>
        <span className="round-buttons">&#10506;</span>
        <span className="round-buttons">&#9995;</span>
        <span className="round-buttons">&#8942;</span>
        <span className="phone-button">&#9990;</span>
      </span>
      <div className="bottom-bar">

        <span>1:53 PM | wiz-etbj-kck</span>

        <span className="bottom-buttons-right">
          <span>i</span>
          <span>&#128101;</span>
          <span>&#128196;</span>
          <span>&#128291;</span>
          <span>&#128274;</span>
        </span>
      </div>

      <div id="smiley-fly"></div>
      <div className="bg-dark"></div>
    </main >
  )
}

export default App
