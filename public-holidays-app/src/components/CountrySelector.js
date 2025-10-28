import React from "react";
import { useQuery } from "@tanstack/react-query";

function CountrySelector({ onSelect, selectedCountry }) {
  // Fetch countries from OpenHolidays API
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await fetch("https://openholidaysapi.org/Countries?languageIsoCode=en");
      if (!res.ok) throw new Error("Failed to fetch countries");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading countries...</p>;
  if (error) return <p>Error loading countries.</p>;

  return (
    <div className="form-group">
      <label htmlFor="country-select">Select a country:</label>
      <select
        id="country-select"
        className="form-control"
        value={selectedCountry}
        onChange={(e) => onSelect(e.target.value)}
      >
        {data.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelector;
