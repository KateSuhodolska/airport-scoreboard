import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { fetchFlightsList } from "../../flights.actions";
import "./flights-table.scss";
import {
  flightsDepartureSelector,
  flightsArrivalSelector,
} from "../../flights.selectors";
import TabPanel from "./TabPanel";
import { Animations } from "./Skeleton";

const FlightsTable = ({
  fetchFlightsList,
  departureList,
  arrivalsList,
  indexOfactiveTab,
  searchDate,
  isFetching,
}) => {
  useEffect(() => {
    fetchFlightsList(searchDate);
  }, [searchDate]);

  const renderTableBody = (dataAction) =>
    dataAction.length > 0 ? (
      dataAction?.map((flight) => (
        <tr key={flight.ID} className="flights-table__row">
          <th className="flights-table__terminal">
            {flight.term === "D" ? (
              <span className="terminal terminal-d">{flight.term}</span>
            ) : (
              <span className="terminal">{flight.term}</span>
            )}
          </th>
          <th className="flights-table__time">
            {dataAction === departureList
              ? moment(flight.timeDepShedule).format("H:mm")
              : moment(flight.timeDepShedule).format("H:mm")}
          </th>
          <th className="flights-table__dectination">
            {dataAction === departureList
              ? flight["airportToID.city_en"]
              : flight["airportFromID.city_en"]}
          </th>
          <th className="flights-table__status">
            {dataAction === departureList
              ? `Departed at ${moment(flight.timeDepFact).format("H:mm")}`
              : `Arrival at ${moment(flight.timeTakeofFact).format("H:mm")}`}
          </th>
          <th className="flights-table__airline">
            <div className="flights-table__airline-logo">
              <img
                className="flights-table__airline-logo-img"
                src={flight.airline.en.logoName}
                alt="logo"
              />
            </div>
            <span>{flight.airline.en.name}</span>
          </th>
          <th className="flights-table__flight">
            {flight.codeShareData["0"].codeShare}
          </th>
        </tr>
      ))
    ) : (
      <tr className="no-flights__container">
        <th className="no-flights__element" scope="row" colSpan="2">
          No flights
        </th>
      </tr>
    );

  return isFetching === true ? (
    <Animations />
  ) : (
    <table className="flights-table">
      {departureList.length !== 0 && arrivalsList.length !== 0 && (
        <thead className="flights-table__header">
          <tr>
            <th className="flights-table__header-field">Terminal</th>
            <th className="flights-table__header-field">Local time</th>
            <th className="flights-table__header-field">Destination</th>
            <th className="flights-table__header-field">Status</th>
            <th className="flights-table__header-field">Airline</th>
            <th className="flights-table__header-field">Flight</th>
          </tr>
        </thead>
      )}
      <TabPanel value={indexOfactiveTab} index={0}>
        {renderTableBody(departureList)}
      </TabPanel>
      <TabPanel value={indexOfactiveTab} index={1}>
        {renderTableBody(arrivalsList)}
      </TabPanel>
    </table>
  );
};

const mapState = (state) => {
  return {
    departureList: flightsDepartureSelector(state),
    arrivalsList: flightsArrivalSelector(state),
    isFetching: state.isFetching,
  };
};

const mapDispatch = {
  fetchFlightsList,
};

const connector = connect(mapState, mapDispatch);

export default connector(FlightsTable);
