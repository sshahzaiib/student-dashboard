import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Timer from "react-compound-timer";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 10px #00000026",
    borderRadius: "8px",
    opacity: "1",
    height: 277,
    width: "100%",
  },
  title: {
    fontSize: 28,
    color: "#192D3E",
    fontFamily: "Montserrat",
    marginTop: 12
  },
  description: {
    fontSize: 18,
    color: "#A1A1A1 ",
    fontFamily: "Montserrat",
  },
  timer: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 22,
    background: "#EEEDFC 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "3px",
    padding: 13,
    width: 145,
    marginTop: 10,
    textAlign: "center"
  },
}));

export default function NotificationCard({ icon, title, description, timer }) {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box p={2} pb={0}>
        <img src={icon} alt="card-calendar" width="61px" height="61px" />
        <Typography variant="body1" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
        {timer && (
          <Timer initialTime={11123000} direction="backward">
            {() => (
              <div className={classes.timer}>
                <Timer.Hours />
                {" : "}
                <Timer.Minutes />
                {" : "}
                <Timer.Seconds />
              </div>
            )}
          </Timer>
        )}
      </Box>
    </Box>
  );
}
