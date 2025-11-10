import { useState, useEffect } from "react";

function weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=India`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const val = await response.json();
        setData(val);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
    const interval = setInterval(fetchWeather, 30000); // 5 min

    return () => clearInterval(interval); // cleanup when component unmounts
  }, [apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1 className="fixed top-20 right-0 left-0">Weather App <img className='inline w-12 h-24' src="/weather-svgrepo-com.svg"/></h1>
      <p className="text-3xl pb-10">Location: India</p>
      <p className="text-3xl pb-10">Temperature: {data.current.temp_c}°C</p>
      <p className="text-3xl">Condition: {data.current.condition.text}</p>
    </div>
  );
}

export default weather;
