import WeatherPage from './components/WeatherPage/WeatherPage';

export default function Home() {
  const nowHours = new Date().getHours();

  function isDay() {
    return nowHours >= 6 && nowHours < 18;
  }
  return (
    <div className={`App ${isDay() ? 'AppDay' : 'AppNight'}`}>
      <WeatherPage />
    </div>
  );
}
