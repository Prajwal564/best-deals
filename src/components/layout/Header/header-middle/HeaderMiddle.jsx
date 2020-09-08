import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignInPopUp from './SignInPopUp';
import HeaderSearchBar from './SearchBar';
import DrawerList from './DrawerList';
import { ReactComponent as IncomeHonchoLogo } from './income_honcho.svg';

//material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

// import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1px 2px',
    width: '100%',
  },
  rootCard: {
    width: '24vw',
    height: '60vh',
    backgroundColor: '#ebebe0',
  },
  appbarStyle: {
    backgroundColor: '#ffffff',
  },
  paper: {
    width: '60%',
  },
  logo: {
    marginRight: '3em',
  },
  menuButton: {
    color: '#034376',
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  drawer: {
    flexShrink: 0,
  },

  drawerPaperMobile: {
    height: '100vh',
  },
  drawerPaper: {
    position: 'fixed',
    top: '65px',
    width: 'auto',
    height: '76vh',
    '&::-webkit-scrollbar': {
      width: '0.2em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    justifyContent: 'space-between',
  },
  fixedDrawerHeader: {
    padding: theme.spacing(2),
  },
  headerRightIcon: {
    display: 'flex',
    marginLeft: 'auto',
  },
  headerLogoSmall: {
    width: '70px',
    cursor: 'pointer',
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [opens, setOpens] = useState(false);

  const handleDrawerOpen = () => {
    setOpens(!opens);
  };

  const handleDrawerClose = () => {
    setOpens(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appbarStyle}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Link to='/'>
              <Hidden smDown>
                <IncomeHonchoLogo />
              </Hidden>
              <Hidden mdUp>
                <img
                  className={classes.headerLogoSmall}
                  src='https://i.imgur.com/6LMKoA1.png'
                  alt='ih-logo'
                />
              </Hidden>
            </Link>
          </div>
          <Hidden smDown>
            <Button component={Link} to='/deals' disableRipple>
              Deals
            </Button>
            <Button disableRipple>Stores</Button>
            <Button disableRipple>Blogs</Button>
          </Hidden>
          <div className={classes.headerRightIcon}>
            {/* Search Icon */}
            <HeaderSearchBar />
            {/* // sign in popover */}
            <SignInPopUp />
          </div>
        </Toolbar>
      </AppBar>

      {/* ===== App bar drawer ====== */}

      <nav className={classes.drawer}>
        <Hidden mdUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={opens}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaperMobile,
            }}
            ModalProps={{ keepMounted: true }}
          >
            <div className={classes.drawerHeader}>
              <Typography variant='button' noWrap>
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
        <Hidden mdDown implementation='css'>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.fixedDrawerHeader}>
              <Typography variant='button' noWrap>
                <b>All Category </b>
              </Typography>
            </div>
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default HeaderMiddle;
