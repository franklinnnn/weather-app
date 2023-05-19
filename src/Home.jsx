import React from "react";
import { useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Results from "./components/Results";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import {
  getCurrentWeatherData,
  getForecastWeatherData,
  getNewsData,
} from "./util/fetchData";
import { AnimatePresence, motion } from "framer-motion";
import News from "./components/News";
import { newsData } from "./util/newsData";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [weather, setWeather] = useState({});
  const [news, setNews] = useState({});
  const [sys, setSys] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [daysForecast, setDaysForecast] = useState([]);
  const [showForecast, setShowForecast] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setLoading(true);
    setShowNews(false);
    e.preventDefault();
    getCurrentWeatherData(search).then((res) => {
      setResults(res);
      setWeather(res.weather[0]);
      setSys(res.sys);
      getForecastWeatherData(res.coord.lat, res.coord.lon).then(
        setDaysForecast
      );
      getNewsData(res.name).then(setNews);
      setLoading(false);
      setShowResults(true);
    });
    setSearch("");
  };

  const toggleShowForecast = () => {
    setShowForecast(!showForecast);
  };

  const toggleShowNews = () => {
    setShowNews(!showNews);
  };

  return (
    <motion.div
      className="container"
      key="container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25, type: "spring", stiffness: 50 }}
    >
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <AnimatePresence initial={false}>
        {showResults && (
          <motion.div
            key="results"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {results.cod === "404" ? (
              <NotFound results={results} />
            ) : (
              <Results
                results={results}
                weather={weather}
                sys={sys}
                showForecast={showForecast}
                setShowForecast={setShowForecast}
                toggleShowForecast={toggleShowForecast}
              />
            )}
          </motion.div>
        )}
        {showForecast && (
          <Forecast daysForecast={daysForecast} timezone={results.timezone} />
        )}
        {showResults && (
          <button className="forecast-show" onClick={toggleShowNews}>
            {showNews ? (
              <div>
                <span>Latest news in {results.name}</span>
                <FaChevronCircleUp />
              </div>
            ) : (
              <div>
                <span>Show Latest News</span>
                <FaChevronCircleDown />
              </div>
            )}
          </button>
        )}
        {showNews && (
          <>{results && <News news={news.articles} loading={loading} />}</>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
