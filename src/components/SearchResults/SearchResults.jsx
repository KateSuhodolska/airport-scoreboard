import React, { useState } from "react";
import "./search-results.scss";
import TabsList from "../TabsList/TabsList";
import Calendar from "../Calendar/Calendar";
import FlightsTable from "../FlightsTable/FlightsTable";
import moment from "moment";

const SearchResults = () => {
  const [indexOfactiveTab, setIndexOfactiveTab] = useState(0);
  const [searchDate, setSearchDate] = useState(
    moment("01-01-2022", "DD-MM-YYYY").format("DD-MM-YYYY")
  );

  return (
    <div className="search-results">
      <TabsList setIndexOfactiveTab={setIndexOfactiveTab} />
      <Calendar searchDate={searchDate} setSearchDate={setSearchDate} />
      <FlightsTable
        indexOfactiveTab={indexOfactiveTab}
        searchDate={searchDate}
      />
    </div>
  );
};

export default SearchResults;
