import React, { useState } from "react";
import "./calendar.scss";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Dialog from "@mui/material/Dialog";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";

const Calendar = ({ searchDate, setSearchDate }) => {
  const [isModalopen, setIsModalopen] = useState(false);
  const [index, setIndex] = useState(null);

  const toggleModal = () => setIsModalopen(!isModalopen);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const isNoFlights = (date) => moment(date.toDate()).isAfter("2022-02-24");

  const yesterday = moment().subtract(1, "days").format("DD-MM-YYYY");
  const today = moment().format("DD-MM-YYYY");
  const tommorow = moment().add(1, "days").format("DD-MM-YYYY");

  const selectTab = () => {
    if (
      searchDate !== yesterday ||
      searchDate !== today ||
      searchDate !== yesterday
    ) {
      setIndex(null);
    }
  };

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div className="calendar">
      <i onClick={toggleModal} className="fa-solid fa-calendar"></i>

      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs value={index} onChange={handleChange}>
          <Tab
            label={
              <div
                className="calendar__day"
                onClick={() => setSearchDate(yesterday)}
              >
                <span className="calendar__day-num">
                  {moment().subtract(1, "days").format("DD/MM")}
                </span>
                <span className="calendar__day-title">Yesterday</span>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div
                className="calendar__day"
                onClick={() => setSearchDate(today)}
              >
                <span className="calendar__day-num">
                  {moment().format("DD/MM")}
                </span>
                <span className="calendar__day-title">Today</span>
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div
                className="calendar__day"
                onClick={() => setSearchDate(tommorow)}
              >
                <span className="calendar__day-num">
                  {moment().add(1, "days").format("DD/MM")}
                </span>
                <span className="calendar__day-title">Tommorow</span>
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <Dialog open={isModalopen} onClose={toggleModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={moment(searchDate).format("DD-MM-YYYY")}
            shouldDisableDate={isNoFlights}
            onAccept={toggleModal}
            onChange={(newValue) => {
              setSearchDate(moment(newValue.toDate()).format("DD-MM-YYYY"));
              selectTab();
            }}
            closeOnSelect={true}
            onCancel={toggleModal}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Dialog>
    </div>
  );
};

export default Calendar;
