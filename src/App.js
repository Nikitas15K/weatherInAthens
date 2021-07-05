import './assets/css/App.css';
import WeatherPage from './components/WeatherPage/WeatherPage';

function App() {
  // check if is daytime or not & add the proper className to change background
  const nowHours = (new Date()).getHours();

  function isDay() {
    return (nowHours >= 6 && nowHours < 18);
  }

  return (
    <div className={`App ${isDay() ? 'AppDay' : 'AppNight'}`} >
      <WeatherPage />
    </div>
  );
}

export default App;
