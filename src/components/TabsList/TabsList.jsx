import React, { useState } from "react";
import "./tabs-list.scss";

const TabsList = ({ setIndexOfactiveTab }) => {
  const [selectTab, setSelectTab] = useState(1);

  const handleChangeActiveTab = (indexOfActiveTab) => {
    setIndexOfactiveTab(indexOfActiveTab);
  };

  return (
    <>
      <div className="tabs">
        <span
          onClick={() => {
            handleChangeActiveTab(0);
            setSelectTab(1);
          }}
          className={`tab tab__departures ${selectTab === 1 && "selected"}`}
        >
          <i
            className={`fa-solid fa-plane-departure ${
              selectTab === 1 && "fa-solid__selected"
            }`}
          ></i>
          <button className={`tab__btn ${selectTab === 1 && "selected-btn"}`}>
            Departures
          </button>
        </span>
        <span
          onClick={() => {
            handleChangeActiveTab(1);
            setSelectTab(2);
          }}
          className={`tab tab__arrivals  ${selectTab === 2 && "selected"}`}
        >
          <i
            className={`fa-solid fa-plane-arrival ${
              selectTab === 2 && "fa-solid__selected"
            }`}
          ></i>
          <button className={`tab__btn ${selectTab === 2 && "selected-btn"}`}>
            Arrivals
          </button>
        </span>
      </div>
    </>
  );
};

export default TabsList;
