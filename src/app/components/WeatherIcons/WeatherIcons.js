import sunny from '../../assets/img/clearsky01d.png';
import sunnyNight from '../../assets/img/clearsky01n.png';

import fewClouds from '../../assets/img/fewclouds02d.png';
import fewCloudsNight from '../../assets/img/fewclouds02n.png';

import clouds from '../../assets/img/clouds03.png';

import darkClouds from '../../assets/img/darkclouds04.png';

import showerRain from '../../assets/img/showerrain09d.png';
import showerRainNight from '../../assets/img/showerrain09n.png';

import rain from '../../assets/img/rain10d.png';
import rainNight from '../../assets/img/rain10n.png';

import thunders from '../../assets/img/thunder11d.png';
import thundersNight from '../../assets/img/thunder11n.png';

import snow from '../../assets/img/snowy13d.png';
import snowNight from '../../assets/img/snowy13n.png';

import fog from '../../assets/img/fog50.png';

import na from '../../assets/img/na.png';

// Bubble Weather Icon Set released by Enthropia Inc, Graphics Page - http://www.enthropia.com/labs/graphics/

const weatherIcons = (image) => {
  if (image === '01d') {
    return sunny;
  } else if (image === '01n') {
    return sunnyNight;
  } else if (image === '02d') {
    return fewClouds;
  } else if (image === '02n') {
    return fewCloudsNight;
  } else if (image === '03d' || image === '03n') {
    return clouds;
  } else if (image === '04d' || image === '04n') {
    return darkClouds;
  } else if (image === '09d') {
    return showerRain;
  } else if (image === '09n') {
    return showerRainNight;
  } else if (image === '10d') {
    return rain;
  } else if (image === '10n') {
    return rainNight;
  } else if (image === '11d') {
    return thunders;
  } else if (image === '11n') {
    return thundersNight;
  } else if (image === '13d') {
    return snow;
  } else if (image === '13n') {
    return snowNight;
  } else if (image === '50d' || image === '50n') {
    return fog;
  } else return na;
};

export default weatherIcons;
