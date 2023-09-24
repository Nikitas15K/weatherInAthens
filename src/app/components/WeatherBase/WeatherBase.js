import weatherIcons from '../WeatherIcons/WeatherIcons';
import weatherWind from '../WeatherWind/WeatherWind';
import './WeatherBase.css';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

// create for each observation its own card...

const WeatherBase = ({
  min,
  max,
  dt,
  description,
  icon,
  temp,
  sunrise,
  sunset,
  feels_like,
  humidity,
  wind_speed,
  type,
}) => {
  const date = new Date(dt);
  const sunriseTime = new Date(sunrise);
  const sunsetTime = new Date(sunset);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const Head = (
    <div className="info">
      <b>
        {min && max ? (
          <>{date.toLocaleDateString()}</>
        ) : (
          <>
            {date
              .toLocaleTimeString()
              .replace('π.μ.', 'a.m.')
              .replace('μ.μ.', 'p.m.')}
          </>
        )}
      </b>
    </div>
  );

  const Main_Forecast = (
    <b>
      {capitalizeFirstLetter(description)}

      {min && max ? (
        <p>
          {Math.round(min)}℃ - {Math.round(max)}℃
        </p>
      ) : (
        <p>{Math.round(temp)}℃</p>
      )}
    </b>
  );

  return (
    <article className={type}>
      <div>{Head}</div>

      <div className="main">{Main_Forecast}</div>

      <img src={weatherIcons(icon).src} alt="Weather" />

      <div className="prediction">
        {/* modal that comes out when you press show more */}
        <WeatherInfo
          activator={({ setShowWeatherInfo }) => (
            <button onClick={() => setShowWeatherInfo(true)}>Show more</button>
          )}
        >
          <h2>Weather In Athens</h2>

          <div>{Head}</div>

          <div>{Main_Forecast}</div>

          <img src={weatherIcons(icon).src} alt="Weather" />

          {sunrise && sunset ? (
            <div>
              <p>
                <b>Sunrise:</b>{' '}
                {sunriseTime.toLocaleTimeString().replace('π.μ.', 'a.m.')}
              </p>
              <p>
                <b>Sunset:</b>{' '}
                {sunsetTime.toLocaleTimeString().replace('μ.μ.', 'p.m.')}
              </p>
            </div>
          ) : null}

          {feels_like ? (
            <p>
              <b>Feels like:</b> {Math.round(feels_like)}℃
            </p>
          ) : null}

          <p>
            <b>Wind:</b> {weatherWind(wind_speed)[0]} b.,{' '}
            {weatherWind(wind_speed)[1]}{' '}
          </p>
          <p>
            <b>Humidity:</b> {humidity}%
          </p>
        </WeatherInfo>
      </div>
      {type === 'current' ? <h1 className="header">Weather in Athens</h1> : ''}
    </article>
  );
};
export default WeatherBase;
