import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AppDrawer from "../../components/drawer";
import StatsCard from "../../components/statsCard";
import Calendar from "../../assets/icons/card-calendar.png";
import CalendarDark from "../../assets/icons/card-calendar-dark.png";
import Courses from "../../assets/icons/card-courses.png";
import Percentage from "../../assets/icons/card-percentage.png";
import Clock from "../../assets/icons/card-clock.png";
import NotificationCard from "../../components/notificationCard";
import Barchart from "../../components/barchart";
import Piechart from "../../components/piechart";
import CalendarPicker from "../../components/calendar";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Montserrat",
    letterSpacing: "0.48px",
    color: "#707071",
    opacity: "1",
    fontSize: "24px",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <AppDrawer>
      <Box p={2}>
        <Typography className={classes.heading}>Student Dashboard</Typography>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <StatsCard
                fill="#f3f2fe"
                stroke="#1700FF"
                title="Attendance percentage"
                percentage="60%"
                icon={Calendar}
              />
            </Grid>
            <Grid item sm={4}>
              <StatsCard
                fill="#fff7f2"
                stroke="#FF761A"
                title="Number of courses"
                percentage="60%"
                icon={Courses}
              />
            </Grid>
            <Grid item sm={4}>
              <StatsCard
                fill="#f9fcf2"
                stroke="#00C3B3"
                title="Total Marks Percentage"
                percentage="60%"
                icon={Percentage}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <Box mt={2}>
                <NotificationCard
                  title="Next Class..."
                  description="Lorem Ipsum Dolor Sit Amet"
                  icon={Clock}
                  timer={true}
                />
              </Box>
              <Box mt={3}>
                <NotificationCard
                  title="Up coming event"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text ever since the 1500."
                  icon={CalendarDark}
                />
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Barchart />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Piechart />
            </Grid>
            <Grid item sm={6}>
              <CalendarPicker />
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Box
            boxShadow={"0px 0px 10px #00000026"}
            borderRadius={8}
            css={{ background: "white" }}
            p={3}>
            <Grid container>
              <Grid item xs={11}>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Elizeu Dias" />
                    </ListItemAvatar>
                    <ListItemText primary="Elizeu " secondary="Admin" />
                  </ListItem>
                </List>
                <Box p={2}>
                  <Typography
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 22,
                      color: "#192D3E",
                    }}>
                    Important Notice: Scheduled Maintenance of SMS
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 20,
                      color: "#707071",
                    }}>
                    Dear SMS Users,
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 20,
                      color: "#707071",
                    }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Box pt={3}>
                  <Typography style={{ fontSize: 14, color: "gainsboro" }}>
                    19 Mar 2020
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        </Box>
      </Box>
    </AppDrawer>
  );
}
