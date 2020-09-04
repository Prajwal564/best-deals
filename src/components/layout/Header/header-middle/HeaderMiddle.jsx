import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { ReactComponent as IncomeHonchoLogo } from "./income_honcho.svg";
import DrawerList from "./DrawerList";

//material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";

//hover pop up
import Popover from "@material-ui/core/Popover";
import SearchBar from "material-ui-search-bar";

//Sign In Dialog
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Link from "@material-ui/core/Link";

//colors
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

// import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1px 2px",
    width: "100%",
  },
  rootCard: {
    width: "24vw",
    height: "60vh",
    backgroundColor: "#ebebe0",
  },
  appbarStyle: {
    backgroundColor: "#ffffff",
  },
  paper: {
    width: "60%",
  },
  logo: {
    marginRight: "3em",
  },
  menuButton: {
    color: "#034376",
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  drawer: {
    flexShrink: 0,
  },

  drawerPaperMobile: {
    height: "100vh",
  },
  drawerPaper: {
    position: "fixed",
    top: "65px",
    bottom: "15px",
    width: "auto",
    height: "90vh",
    "&::-webkit-scrollbar": {
      width: "0.2em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    justifyContent: "space-between",
  },
  fixedDrawerHeader: {
    padding: theme.spacing(2),
  },
  searchIcon: {
    color: "#034376",
    marginLeft: "auto",
    marginRight: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#262626",
    marginTop: "4%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnFacebook: {
    backgroundColor: "#4267B2",
    height: "7vh",
    color: "white",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: blue[800],
    },
  },
  btnGoogle: {
    backgroundColor: "#DD4B39",
    borderRadius: "4px",
    height: "7vh",
    color: "white",
    "&:hover": {
      backgroundColor: red[600],
    },
  },
  btnSignIn: {
    backgroundColor: "#018E01",
    height: "7vh",
    color: "white",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: green[500],
    },
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [opens, setOpens] = useState(false);

  //Sign In Popover
  const [openSignIn, setOpenSignIn] = useState(false);

  const [username, setUsername] = useState("");

  // search bar
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : null;

  //=============

  const handleDrawerOpen = () => {
    setOpens(!opens);
  };

  const handleDrawerClose = () => {
    setOpens(false);
  };

  //======Sign In Popover=========//

  const handleSignInOpen = () => {
    setOpenSignIn(!openSignIn);
  };

  const handleSignInClose = () => {
    setOpenSignIn(false);
  };

  const handleUserName = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbarStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Link to="/">
              <IncomeHonchoLogo />
            </Link>
          </div>
          <Hidden smDown>
            <Button component={Link} to="/deals" disableRipple>
              Deals
            </Button>
            <Button disableRipple>Stores</Button>
            <Button disableRipple>Blogs</Button>
          </Hidden>
          <div className={classes.searchIcon}>
            <IconButton onClick={handleClick} aria-describedby={id}>
              <SearchIcon />
            </IconButton>
          </div>

          {/* //popover */}
          {/* <Hidden smDown> */}

          <Button disableRipple onClick={handleSignInOpen}>
            Sign In
          </Button>

          {/* //==========Dialog============// */}

          <Dialog maxWidth="xs" onClose={handleSignInClose} open={openSignIn}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <DialogTitle align="center">Sign In</DialogTitle>

            <DialogContent>
              <DialogActions>
                <Button
                  className={classes.btnFacebook}
                  disableRipple
                  fullWidth
                  size="medium"
                  variant="contained"
                  startIcon={<FacebookIcon>facebook</FacebookIcon>}
                >
                  Sign In with Facebook
                </Button>{" "}
              </DialogActions>
              <DialogActions>
                <Button
                  className={classes.btnGoogle}
                  fullWidth
                  disableRipple
                  size="medium"
                  variant="contained"
                >
                  <FontAwesomeIcon
                    icon={faGooglePlusG}
                    style={{ marginRight: "8px" }}
                  />
                  Sign In with Google
                </Button>{" "}
              </DialogActions>
              <Typography variant="subtitle1" align="center">
                OR
              </Typography>

              <DialogActions>
                <form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleUserName}
                  />

                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </form>
              </DialogActions>
              <DialogActions style={{ display: "block", align: "left" }}>
                <Link href="#" underline="hover" align="left">
                  Forgot password?
                </Link>
              </DialogActions>

              <DialogActions>
                <Button
                  className={classes.btnSignIn}
                  fullWidth
                  disableRipple
                  type="submit"
                  size="medium"
                  variant="contained"
                  onSubmit={handleSubmit}
                >
                  Sign In
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>

          {/* </Hidden> */}
        </Toolbar>
      </AppBar>

      {/* ===== App bar drawer ====== */}

      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={opens}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaperMobile,
            }}
            ModalProps={{ keepMounted: true }}
          >
            <div className={classes.drawerHeader}>
              <Typography variant="button" noWrap>
                <b>All Department </b>
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <Divider />
            <DrawerList />
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.fixedDrawerHeader}>
              <Typography variant="button" noWrap>
                <b>All Category </b>
              </Typography>
            </div>
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>

      {/* popover for search */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
      </Popover>
    </div>
  );
};

export default HeaderMiddle;
