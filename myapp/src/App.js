import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState("Karachi");
  const changeCountry = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchAPi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=72c747d53e609edfeee1f9f3c070eb31`;
      const respone = await fetch(URL);
      const resJson = await respone.json();
      setCountry(resJson.main);
    };
    fetchAPi();
  }, [search]);

  return (
    <div className="container">
      <h1 className="heading"> Weather App </h1>
      <input type="text" onChange={changeCountry} />

      {!country ? (
        <h2 className="error" > No Data Found </h2>
      ) : (
        <div className="items">
          <h1 className="city-name"> {search} </h1>
          <h3 className="temp"> {country.temp} Cel </h3>
          <h3 className="Min"> Min : {country.temp_min}Cel | Max : {country.temp_max}Cel </h3>
        </div>
      )}
    </div>
  );
}
export default App;


