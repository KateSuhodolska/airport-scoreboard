import React, { useState } from "react";
import { connect } from "react-redux";
import { searchFlightsList } from "../../flights.actions";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./search-flights.scss";

const SearchFlights = ({ searchFlightsList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      searchFlightsList(inputValue);
    }
  };

  return (
    <div className="search-flights">
      <h2 className="search-flights__title">Search flight</h2>

      <div className="search-flights__form">
        <span className="search-flights__form-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          className="search-flights__form-input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
        <button
          className="search-flights__form-button"
          onClick={() => searchFlightsList(inputValue)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  searchFlightsList,
};

const connector = connect(null, mapDispatch);

export default connector(SearchFlights);
