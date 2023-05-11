import React, { useState } from "react";
import Home from "./pages/Home";
import "./reset.css";
import "./App.css";

function App() {
  const [culture, setCulture] = useState([]);
  const [communeSelectedAdd, setCommuneSelectedAdd] = useState([]);
  const [cityDataSearch, setCityDataSearch] = useState([]);
  const [randomActivity, setRandomActivity] = useState([]);

  return (
    <div className="App">
      <Home
        culture={culture}
        setCulture={setCulture}
        communeSelectedAdd={communeSelectedAdd}
        setCommuneSelectedAdd={setCommuneSelectedAdd}
        cityDataSearch={cityDataSearch}
        setCityDataSearch={setCityDataSearch}
        randomActivity={randomActivity}
        setRandomActivity={setRandomActivity}
      />
      <p>coucou</p>
    </div>
  );
}

export default App;
