import React, { useState } from "react";
import CountrySelector from "./components/CountrySelector";
import HolidayList from "./components/HolidayList";

function App() {
  const [countryCode, setCountryCode] = useState("NL");

  return (
    <div className="paper container">
      <h1 className="text-center">Public Holidays App</h1>
      <CountrySelector onSelect={setCountryCode} selectedCountry={countryCode} />
      <HolidayList countryCode={countryCode} />
    </div>
  );
}



export default App;
