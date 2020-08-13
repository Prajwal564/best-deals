import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E4E4E4",
    padding: "0vh 1vw",
    display: "grid",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar disableGutters variant='dense'>
        <IconButton>
          <EmailIcon />
        </IconButton>
        <Typography variant='p' className={classes.title} color='textPrimary'>
          Contact@ih.co.com
        </Typography>

        <IconButton>
          <LockIcon />
        </IconButton>
        <Typography
          variant='p'
          color='textPrimary'
          style={{ marginRight: "1vw" }}
        >
          Login
        </Typography>

        <IconButton>
          <AccountBoxIcon />
        </IconButton>
        <Typography variant='p' color='textPrimary'>
          My Account
        </Typography>
      </Toolbar>
    </div>
  );
}
