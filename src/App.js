import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(
      `http://trefle.io/api/plants/122078?token=dHBJRU9ib1FSSmh5WTJqOGVERkIyZz09`
    )
      .then(response => response.json())
      .then(json => {
        console.log("result", json);
        setPlant(json);
      });
  }, []);

  return (
    <div className="App">
      Plant App
      <div>Plant is</div>
      {plant && <div>{plant.common_name}</div>}
    </div>
  );
}

export default App;
