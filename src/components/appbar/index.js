import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as MenuIcon } from "../../assets/icons/appbar-menu.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as MessageBox } from "../../assets/icons/message-square.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    height: "82px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  menuIcon: {
    marginRight: "29px",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} />
          <IconButton className={classes.menuButton}>
            <Notification />
          </IconButton>
          <IconButton className={classes.menuButton}>
            <MessageBox />
          </IconButton>
          <IconButton className={classes.menuButton}>
            <Mail />
          </IconButton>
          <IconButton className={classes.menuButton}>
            <Calendar />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
