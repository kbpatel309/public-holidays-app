import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';


function App() {
  // Use React Query to fetch list of available countries from the API
  // - The key ['countries'] uniquely identifies this query
  // - React Query will automatically cache results and handle Loading states
  const { data: countries, isLoading, error } = useQuery(['countries'], async () => {
    // Fetch data using the browser's built-in fetch API
    const res = await fetch('https://date.nager.at/api/v3/AvailableCountries');

    // If response is not OK (e.g., 404 or 500), throw an error
    if (!res.ok) throw new Error('Failed to fetch countries');

    // Convert response to JSON and return it
    return res.json();
  });

  // While the request is still loading, show a loading message
  if (isLoading) return <p>Loading countries...</p>;

  // If there was an error (like network failure), show an error message
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="paper container">
      <h1>Public Holidays App</h1>

      {/* Dropdown menu with country options */}
      <select>
        {countries.map(c => (
          <option key={c.countryCode} value={c.countryCode}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}





export default App;
