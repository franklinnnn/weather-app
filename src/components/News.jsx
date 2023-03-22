import React from "react";
import { motion } from "framer-motion";

import noImg from "../assets/no-img.png";

const News = ({ news, loading }) => {
  console.log(news);
  return (
    <motion.div
      className="news"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {news?.map((article) => (
        <div key={article.publishedAt}>
          {loading ? (
            <div className="news-container">loading...</div>
          ) : (
            <div className="news-container">
              <a
                href={article.url}
                className="news-article"
                title={article.title}
                target="_blank"
                rel="external"
              >
                <div className="news-img">
                  <div className="news-description">
                    {article.content.substring(0, 200) +
                      (article.content.length > 200 ? "..." : "")}
                  </div>
                  {article.source.id === "cnn" ? (
                    <img src={noImg} />
                  ) : (
                    <img
                      src={!article.urlToImage ? noImg : article.urlToImage}
                      alt=""
                    />
                  )}
                </div>
                <div className="news-info">
                  <span>{article.title}</span>
                  <div className="news-source">
                    <span>{article.source.name}</span>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default News;
