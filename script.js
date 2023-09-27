const apiKey = "API_KEY";  
const apiUrl = 'https://api.weatherapi.com/v1/current.json';


const locationInput = document.querySelector('#location');
const weatherDisplay = document.querySelector('#weather-display');
const getWeatherButton = document.querySelector('#get-weather');

getWeatherButton.addEventListener('click', async () => {
  const location = locationInput.value;
  
  // Make an AJAX request to the WeatherAPI
  const response = await fetch(`${apiUrl}?key=${apiKey}&q=${location}`);

  // Check if the request was successful
  if (response.status === 200) {
    const weatherData = await response.json();
    displayWeatherData(weatherData);
  } else {
    // Display an error message
    weatherDisplay.innerHTML = `An error occurred: ${response.statusText}`;
  }
});

function displayWeatherData(weatherData) {
  const temperature = weatherData.current.temp_c;  
  const humidity = weatherData.current.humidity;
  const windSpeed = weatherData.current.wind_kph;  
  const weatherDescription = weatherData.current.condition.text;

  weatherDisplay.innerHTML = `
    <h2>Current Weather for ${weatherData.location.name}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} km/h</p>
    <p>Weather Description: ${weatherDescription}</p>
  `;
}

