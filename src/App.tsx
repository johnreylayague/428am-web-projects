import { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const search = async (e: any) => {
    if (e.key === "Enter") {
      try {
        const data = await fetchWeather(query);
        setResult(data);
        setError(null);
      } catch (err: any) {
        setError("Error fetching data");
        setResult(null);
      }
      setQuery("");
    }
  };

  // The Open-Meteo Geocoding API returns an object with a "results" array.
  // We will show the first result if it exists.
  const city = result?.results?.[0];

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {error && (
        <div className="city">
          <p>{error}</p>
        </div>
      )}
      {city && (
        <div className="city">
          <h2 className="city-name">
            <span>{city.name}</span>
            {city.country && <sup>{city.country}</sup>}
          </h2>
          <div className="city-temp">
            Lat: {city.latitude}, Lon: {city.longitude}
          </div>
          <div className="info">
            <p>
              {city.admin1 && `Region: ${city.admin1}`}{" "}
              {city.timezone && `| Timezone: ${city.timezone}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
