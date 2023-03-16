import React from "react";
import { weatherIcons } from "../util/weatherIcons";
import { motion } from "framer-motion";
import { getDayOfWeek } from "../util/fetchData";

const Forecast = ({ daysForecast, timezone }) => {
  return (
    <div className="forecast-container">
      {daysForecast.map((day) => {
        const dayOfWeek = getDayOfWeek(day.dt, timezone);

        const weatherIcon = weatherIcons.find(
          (icon) => icon.condition === day.weather[0].main
        );

        return (
          <motion.div
            className="forecast"
            key={day.dt}
            initial={{ x: 0, scale: 0, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
          >
            <div>
              <h2>{dayOfWeek}</h2>
            </div>
            <div>
              <img src={weatherIcon?.icon} alt="" />
            </div>
            <div>
              <h2>
                {Math.round(((day.main?.temp - 273.15) * 9) / 5 + 32)}
                <span>°F</span> {Math.round(day.main?.temp - 273.15)}
                <span>°C</span>
              </h2>
              <div>{day.weather.map((weather) => weather.description)}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Forecast;
