/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import Activities from "../components/Activities";
import Weather from "../components/weather/Weather";
import Searchbar from "../components/searchbar/Searchbar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function Home({
  culture,
  setCulture,
  cultureRandom,
  setCultureRandom,
  communeSelectedAdd,
  setCommuneSelectedAdd,
  cityDataSearch,
  setCityDataSearch,
  cultureIsLoaded,
  setCultureIsLoaded,
  savedCulture,
  setSavedCulture,
  startX,
  setStartX,
  endX,
  setEndX,
}) {
  function RandomActivities() {
    setCultureRandom(Math.floor(Math.random() * culture.length));
  }
  function SaveActivities() {
    setSavedCulture([...savedCulture, culture[cultureRandom]]);
    setCultureRandom(Math.floor(Math.random() * culture.length));
  }
  useEffect(() => {
    axios
      .get(
        `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=base-des-lieux-et-des-equipements-culturels&q=&lang=fr&rows=10000&sort=sous_domaines&refine.code_insee_arrondt=${cityDataSearch[0]}&exclude.domaine=Archives&exclude.sous_domaines=Monument `
      )
      .then((res) => {
        setCulture(res.data.records);
        setCultureIsLoaded(true);
      })
      .catch((error) => console.error(error.message));
  }, [communeSelectedAdd]);
  console.log(culture, cityDataSearch, savedCulture);
  return (
    <div>
      <Weather cityDataSearch={cityDataSearch} />
      <div className="SearchBar">
        <Searchbar
          setCommuneSelectedAdd={setCommuneSelectedAdd}
          communeSelectedAdd={communeSelectedAdd}
          setCityDataSearch={setCityDataSearch}
        />

        <div>
          <ul>
            {communeSelectedAdd.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      {cultureIsLoaded ? (
        <div>
          <Activities
            culture={culture[cultureRandom]}
            startX={startX}
            setStartX={setStartX}
            endX={endX}
            setEndX={setEndX}
            RandomActivities={() => RandomActivities()}
            SaveActivities={() => SaveActivities()}
          />
          <button onClick={() => RandomActivities()}>Next</button>
          <button onClick={() => SaveActivities()}>Save</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Home;
