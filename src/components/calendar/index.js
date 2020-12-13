import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import CardHeader from "../cardHeader";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 10px #00000026",
    borderRadius: "8px",
    opacity: "1",
    height: 475,
    width: "100%",
  },
}));

export default function CalendarPicker() {
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Box className={classes.card} p={2}>
      <CardHeader style={{ paddingTop: 12 }} />
      <Box display="flex" justifyContent="center">
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          shouldHighlightWeekends
        />
      </Box>
    </Box>
  );
}
