import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Appbar from "../appbar";
import { Avatar, Box, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: "white",
    background: "#192D3E",
    "& svg": {
      color: "white",
    },
    fontSize: 20,
    fontFamily: "Montserrat",
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    "& div": {
      padding: 18,
      fontSize: 28,
      fontFamily: "Montserrat", 
    },
  },
  content: {
    flexGrow: 1,
  },
}));

export default function AppDrawer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <div className={classes.toolbar}>
          <div>INDEX.</div>
        </div>
        <Divider />
        <Box py={4} px={2} display="flex" alignItems="center">
            <Avatar style={{width: 86, height: 86}} />
            <Box flexGrow={1} />
            <Typography>John Doe</Typography>
            <ExpandMoreIcon />
          </Box>
        <List>
          {[
            "Dashboard",
            "Profile",
            "Chat",
            "Calendar",
            "Notice Board",
            "Class Routine",
            "Live Class",
            "Attendence",
            "Assessment",
            "Result",
            "Course",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Appbar />
        {children}
      </main>
    </div>
  );
}
