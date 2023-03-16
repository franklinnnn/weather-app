import sunIcon from "../assets/weather-icons/sun.png";
import cloudyIcon from "../assets/weather-icons/cloudy-day.png";
import rainIcon from "../assets/weather-icons/rain.png";
import snowyIcon from "../assets/weather-icons/snowy.png";
import thunderstormIcon from "../assets/weather-icons/thunderstorm.png";
import hazeIcon from "../assets/weather-icons/haze.png";
import mistIcon from "../assets/weather-icons/mist.png";

export const weatherIcons = [
  {
    idGroup: 800,
    condition: "Clear",
    icon: sunIcon,
  },
  {
    idGroup: 801,
    condition: "Clouds",
    icon: cloudyIcon,
  },
  {
    idGroup: 500,
    condition: "Rain",
    icon: rainIcon,
  },
  {
    idGroup: 600,
    condition: "Snow",
    icon: snowyIcon,
  },
  {
    idGroup: 200,
    condition: "Thunderstorm",
    icon: thunderstormIcon,
  },
  {
    idGroup: 200,
    condition: "Haze",
    icon: hazeIcon,
  },
  {
    idGroup: 200,
    condition: "Mist",
    icon: mistIcon,
  },
];
