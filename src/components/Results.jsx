import React, { useState } from "react";
import { weatherIcons } from "../util/weatherIcons";
import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import sunriseIcon from "../assets/weather-icons/sunrise.png";
import sunsetIcon from "../assets/weather-icons/sunset.png";
import { motion } from "framer-motion";
import { getDayOfWeek, getLocalTime } from "../util/fetchData";

const Results = ({
  results,
  weather,
  sys,
  showForecast,
  toggleShowForecast,
}) => {
  const [metric, setMetric] = useState(false);

  const weatherIcon = weatherIcons.find(
    (icon) => icon.condition === weather.main
  );
  const fahrenheit = Math.round(((results.main?.temp - 273.15) * 9) / 5 + 32);
  const celsius = Math.round(results.main?.temp - 273.15);
  const windKm = Math.round(results.wind?.speed * 3.6);
  const windMi = Math.round(results.wind?.speed * 2.237);

  const dayOfWeek = getDayOfWeek(results.dt, results.timezone);
  const localTime = getLocalTime(results.dt, results.timezone);
  const sunrise = getLocalTime(sys.sunrise, results.timezone);
  const sunset = getLocalTime(sys.sunset, results.timezone);

  return (
    <motion.div
      className="results-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="results">
        <motion.div
          className="results-city"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
        >
          <h1>{results.name}</h1>
          <div className="results-local-time">
            {dayOfWeek}
            <div>{localTime}</div>
          </div>
        </motion.div>
        <motion.img
          className="results-icon"
          src={weatherIcon?.icon}
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="results-temp"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
        >
          <div>
            {!metric ? (
              <h1 className={metric ? "results-f" : "active"}>
                {fahrenheit ? fahrenheit : null}
              </h1>
            ) : (
              <h1 className={metric ? "active" : "results-c"}>
                {celsius ? celsius : null}
              </h1>
            )}
            <div className="results-units">
              <span
                className={metric ? "results-unit" : "active"}
                onClick={() => setMetric(false)}
              >
                °F
              </span>{" "}
              <span
                className={metric ? "active" : "results-unit"}
                onClick={() => setMetric(true)}
              >
                °C
              </span>
            </div>
          </div>
          <h2>{weather.description}</h2>
        </motion.div>
      </div>
      <div className="results-additional">
        <motion.div
          className="results-sunrise-sunset"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
        >
          <div className="results-sunrise">
            <img src={sunriseIcon} alt="" />
            <div>Sunrise {sunrise}</div>
          </div>
          <div className="results-sunset">
            <img src={sunsetIcon} alt="" />
            <div>Sunset {sunset}</div>
          </div>
        </motion.div>
        <motion.div
          className="results-humidity-wind"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
        >
          <div className="humidity">
            <div className="humidity-icon">
              <WiHumidity />
            </div>
            <div className="humidity-value">
              {results?.main?.humidity}%<span>humidity</span>
            </div>
          </div>
          <div className="wind">
            <div className="wind-icon">
              <RiWindyLine />
            </div>
            <div className="wind-value">
              {!metric ? (
                <div>{windMi ? windMi : null}mph</div>
              ) : (
                <div>{windKm ? windKm : null}km/h</div>
              )}
              <span>wind</span>
            </div>
          </div>
        </motion.div>
      </div>
      <button className="forecast-show" onClick={toggleShowForecast}>
        {showForecast ? (
          <div>
            <span>Five Day Forecast</span>
            <FaChevronCircleUp />
          </div>
        ) : (
          <div>
            <span>Show Five Day Forecast</span>
            <FaChevronCircleDown />
          </div>
        )}
      </button>
      {/* <button className="forecast-show" onClick={toggleShowNews}>
        {showNews ? (
          <div>
            <span>Latest news in {results.name}</span>
            <FaChevronCircleUp />
          </div>
        ) : (
          <div>
            <span>Latest local news</span>
            <FaChevronCircleDown />
          </div>
        )}
      </button> */}
    </motion.div>
  );
};

export default Results;
