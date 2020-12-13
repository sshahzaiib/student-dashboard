import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { PieChart } from "react-minimal-pie-chart";
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

export default function Piechart() {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box p={2} pb={0}>
        <CardHeader style={{paddingTop: 12}} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <PieChart
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: '8px',
            width: '50%'
          }}
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
            radius={PieChart.defaultProps.radius - 6}
            lineWidth={30}
            segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
            animate
            paddingAngle={5}
          />
          ;
        </Box>
      </Box>
    </Box>
  );
}
