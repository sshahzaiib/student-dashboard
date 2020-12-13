import { Box, makeStyles, Typography } from "@material-ui/core";
import Minimize from "../../assets/icons/minimize.png";
import Reload from "../../assets/icons/reload.png";
import Close from "../../assets/icons/close.png";

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: "#192D3E",
  },
  actionIcon:{
    marginLeft: 16
  }
}));

export default function CardHeader(props) {
  const classes = useStyles();
  return (
    <Box {...props} py={3} display="flex" elevation={0}>
      <Typography variant="body1" className={classes.title}>
        Lorem ipsum
      </Typography>
      <Box flexGrow={1} />
      <img className={classes.actionIcon} src={Minimize} alt="icon" width={24} height={24} />
      <img className={classes.actionIcon} src={Reload} alt="icon" width={24} height={24} />
      <img className={classes.actionIcon} src={Close} alt="icon" width={24} height={24} />
    </Box>
  );
}
