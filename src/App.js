import React, { useState } from "react";
import "./styles.css";
var emojis = {
  "north indian": [
    {
      name: "daal-rice",
      desc: "120"
    },
    { name: "poha", desc: "130" }
  ],
  "south indian": [
    {
      name: "idli",
      desc: "156"
    },
    { name: "dosa", desc: "193" }
  ],
  panjabi: [
    {
      name: "lassi",
      desc: "198"
    },
    { name: "makke di roti", desc: "159" }
  ]
};

var types = Object.keys(emojis);
export default function App() {
  var [show, setShow] = useState([]);

  function onClickHandler(zone) {
    var zones = emojis[zone];
    console.log(zones);
    setShow(zones);
  }

  return (
    <div className="App">
      <h1>🍉🍌🍒🥝</h1>
      <h1 className="title">Zoner Wise Healthy and Tasty F00D! </h1>
      <small className="small">explore your favourite zone!!</small>
      <div style={{ padding: "rem" }}>
        {types.map(function (zone) {
          return (
            <button
              onClick={() => onClickHandler(zone)}
              style={{ margin: "1rem", padding: "0.5rem" }}
            >
              {zone}
            </button>
          );
        })}{" "}
      </div>
      <h2>
        {show.map(function (food) {
          return (
            <div style={{ paddingTop: "2rem" }}>
              <div style={{ fontSize: "2rem" }}>{food.name}</div>
              <small>Calories: {food.desc}cl</small>
            </div>
          );
        })}
      </h2>
    </div>
  );
}
