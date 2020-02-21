import React from "react";
import "./App.css";

function getResults() {
  fetch(
    `http://trefle.io/api/plants/122078?token=dHBJRU9ib1FSSmh5WTJqOGVERkIyZz09`
  )
    .then(response => response.json())
    .then(json => {
      console.log("result", json);
    });
}

function App() {
  return <div className="App">{getResults()}Plant App</div>;
}

export default App;
