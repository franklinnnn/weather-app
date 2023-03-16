import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <motion.form
      className="search-container"
      onSubmit={handleSearch}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MdLocationPin className="search-location-icon" />
      <input
        type="text"
        placeholder="enter city"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" disabled={!search}>
        <BsSearch className="search-icon" />
      </button>
    </motion.form>
  );
};

export default Search;
