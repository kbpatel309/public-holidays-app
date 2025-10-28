import React from "react";
import { useQuery } from "@tanstack/react-query";

function HolidayList({ countryCode }) {
  const year = new Date().getFullYear();

  const { data, isLoading, error } = useQuery({
    queryKey: ["holidays", countryCode],
    queryFn: async () => {
      const res = await fetch(
        `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryCode}&languageIsoCode=en&validFrom=${year}-01-01&validTo=${year}-12-31`
      );
      if (!res.ok) throw new Error("Failed to fetch holidays");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading holidays...</p>;
  if (error) return <p>Error loading holidays.</p>;

  return (
    <div className="row flex-center">
      <div className="sm-12 md-8 card">
        <h3>{countryCode} Holidays ({year})</h3>
        <ul>
          {data.length === 0 ? (
            <p>No holidays found.</p>
          ) : (
            data.map((holiday) => (
              <li key={holiday.startDate}>
                <strong>{holiday.name[0].text}</strong> — {holiday.startDate}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default HolidayList;