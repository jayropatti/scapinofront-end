import WeatherService from '../service/weather_service';
import { round } from '../utils/weather-utils';

const weatherService = new WeatherService();

/**
 * This function should render the HTML element with the class '.weather-info'.
 * The information to be shown should be an icon representing the current weather for a given city.
 * Followed by the name of the city and the current temperature in degrees celsius.
 *
 * @function renderWeatherInfo
 *
 */
function renderWeatherInfo() {
  const city = 'Utrecht';

  const weatherData = document.querySelector('.weather-info');

  weatherService
    .getWeatherData(city)
    .then((weather) => {
      // Toon het weer door het icoon te tonen met tekst
      const weatherImgElement = document.createElement('img');
      weatherImgElement.setAttribute(
        'src', 
        `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,

      );
      weatherImgElement.setAttribute('alt', weather.weather[0].description);
      const weatherSpanElement = document.createElement('span');
      weatherSpanElement.innerText = `${city} - ${round(
        weather.main.temp,
        1,
      )}°C`;

      weatherData.append(weatherImgElemen);
      weatherData.append(weatherSpanElement);  
    })
      .catch((error) => {
        console.error(error);
      });
}

// ------------- Main program --------------------
renderWeatherInfo();
