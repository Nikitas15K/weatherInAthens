'use client';

import { useState } from 'react';
import { baseUrl } from '../../config/index';
import useFetch from '../../hooks/useFetch';
import WeatherBase from '../WeatherBase/WeatherBase';
import './WeatherPage.css';
import loader from '../../assets/img/loader.gif';

const WeatherPage = () => {
  // create two useStates to buttons that show or hide the hour or day projections
  const [hideHours, setHideHours] = useState(false);
  const [hideDays, setHideDays] = useState(false);

  // use of useFetch custom hook to fetch data from openweatherapi
  const { data: weather, error, isLoading } = useFetch(`${baseUrl}`);

  // if error show the error
  if (error) return <div className="error"> {error} </div>;

  // if weather is loadind show Loading
  if (!weather)
    return isLoading ? (
      <div>
        <img className="load-gif" src={loader.src} alt="loading" />
      </div>
    ) : (
      <div></div>
    );

  return (
    <div>
      <div className="current-weather">
        <div>
          <b className="when">Now</b>

          <WeatherBase
            dt={weather.current.dt * 1000}
            sunrise={weather.current.sunrise * 1000}
            sunset={weather.current.sunset * 1000}
            description={weather.current.weather[0].description}
            icon={weather.current.weather[0].icon}
            temp={weather.current.temp}
            feels_like={weather.current.feels_like}
            humidity={weather.current.humidity}
            wind_speed={weather.current.wind_speed}
            type="current"
            min={weather.current.temp.min}
            max={weather.current.temp.max}
          />
        </div>
        <div>
          <div>
            <b className="when">Next Hours </b>

            <button onClick={() => setHideHours(!hideHours)}>
              {hideHours ? <b>show</b> : <b>hide</b>}
            </button>
          </div>

          {hideHours ? (
            ' '
          ) : (
            <div className="hourly-display-style">
              {weather.hourly.slice(1, 6).map((weatherHour, dt) => (
                <div key={dt}>
                  <WeatherBase
                    dt={weatherHour.dt * 1000}
                    sunrise={weatherHour.sunrise * 1000}
                    sunset={weatherHour.sunset * 1000}
                    description={weatherHour.weather[0].description}
                    icon={weatherHour.weather[0].icon}
                    temp={weatherHour.temp}
                    type="hourly"
                    feels_like={weatherHour.feels_like}
                    humidity={weatherHour.humidity}
                    wind_speed={weatherHour.wind_speed}
                    min={weatherHour.temp.min}
                    max={weatherHour.temp.max}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <b className="when">Next Days </b>
        <button onClick={() => setHideDays(!hideDays)}>
          {hideDays ? <b>show</b> : <b>hide</b>}
        </button>
      </div>

      {hideDays ? (
        ''
      ) : (
        <div className="daily-display-style">
          {weather.daily.slice(1, 6).map((weatherDay, dt) => (
            <div key={dt}>
              <WeatherBase
                min={weatherDay.temp.min}
                max={weatherDay.temp.max}
                dt={weatherDay.dt * 1000}
                sunrise={weatherDay.sunrise * 1000}
                sunset={weatherDay.sunset * 1000}
                description={weatherDay.weather[0].description}
                icon={weatherDay.weather[0].icon}
                feels_like={weatherDay.feels_like.day}
                type="daily"
                temp={weatherDay.temp}
                humidity={weatherDay.humidity}
                wind_speed={weatherDay.wind_speed}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
