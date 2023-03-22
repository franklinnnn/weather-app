const WEATHER_API = import.meta.env.VITE_WEATHER_API;
const NEWS_API = import.meta.env.VITE_NEWS_API;

export const getCurrentWeatherData = async (city) => {
  const data =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}
    `);
  const response = await data.json();
  return response;
};

export const getForecastWeatherData = async (lat, lon) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}`
  );
  const response = await data.json();
  const days = [];
  for (let i = 3; i < response.list.length; i += 8) {
    days.push(response.list[i]);
  }
  return days;
};

export const getNewsData = async (location) => {
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=${location}&from=${yesterdayDate}&to=${yesterdayDate}&sortBy=relevancy&language=en&pageSize=5&apiKey=${NEWS_API}`
  );
  const response = await data.json();
  return response;
};

export const getLocalTime = (dt, timezone) => {
  const date = new Date((dt + timezone) * 1000);
  const local = date.toUTCString();
  const time = local.substring(17, 22);
  return time;
};

export const getDayOfWeek = (dt, timezone) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date((dt + timezone) * 1000);
  const day = days[date.getUTCDay()];
  return day;
};

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 1);
let yesterdayDate = currentDate.toJSON().slice(0, 10);
