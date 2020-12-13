import { Box, makeStyles, Typography } from "@material-ui/core";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

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
    fontSize: 18,
    color: "#192D3E",
    fontFamily: "Montserrat",
  },
  percentage: {
    fontSize: 28,
    color: "#192D3E",
    fontFamily: "Montserrat",
  },
}));

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function StatsCard({ fill, stroke, icon, percentage, title }) {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box p={2} pb={0}>
        <img src={icon} alt="card-calendar" width="61px" height="61px" />
        <Typography className={classes.percentage}>{percentage}</Typography>
        <Typography variant="body1" className={classes.title}>
          {title}
        </Typography>
      </Box>
      <div style={{ width: "100%", height: 130 }}>
        <ResponsiveContainer>
          <AreaChart
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            data={data}>
            <Area type="monotone" dataKey="uv" stroke={stroke} fill={fill} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
}
