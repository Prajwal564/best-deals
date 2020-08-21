import React from "react";

import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { ReactComponent as IncomeHonchoLogo } from "./income_honcho.svg";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1vh 0.1vw",
    background: "#ffffff",
  },
  paper: {
    width: "60%",
  },
  logo: {
    flexGrow: 1,
  },
  dropdown: {
    display: "flex",
    flexWrap: "wrap",
  },

  header: {
    fontFamily: "Roboto",
    fontWeight: "bolder",
    fontSize: "16px",
    color: "black",
    paddingTop: "4%",
    paddingBottom: "1%",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    marginLeft: "5%",
    marginRight: "5%",
  },

  listStyle: {
    marginRight: "5%",
    marginBottom: "3%",
    marginLeft: "2.7%",
  },
  itemStyle: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#353535",
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Toolbar>
          <div className={classes.logo}>
            <Link to="/">
              <IncomeHonchoLogo />
            </Link>
          </div>

          <Button component={Link} to="/deals">
            <b>Deals</b>
          </Button>
          <Button onClick={handleClick}>
            <b>Stores</b>
          </Button>
          <Popover
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.header}>
              Find Coupons By Store
            </Typography>
            <div className={classes.dropdown}>
              <List className={classes.listStyle}>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
              </List>
              <List className={classes.listStyle}>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>

                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
              </List>
              <List className={classes.listStyle}>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
              </List>
              <List className={classes.listStyle}>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
              </List>
              <List className={classes.listStyle}>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
                <ListItem className={classes.itemStyle}>Amazon</ListItem>
              </List>
            </div>
          </Popover>
          <Button>
            <b>Forums</b>
          </Button>
          <Button>
            <b>Blogs</b>
          </Button>
          <Button>
            <b>About Us</b>
          </Button>
        </Toolbar>
      </div>
    </React.Fragment>
  );
};

export default HeaderMiddle;
