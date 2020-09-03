import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IncomeHonchoLogo } from './income_honcho.svg';
import DrawerList from './DrawerList';

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
import SearchIcon from '@material-ui/icons/Search';

//hover pop up
import Popover from '@material-ui/core/Popover';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1px 2px',
    width: '100%',
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
    height: '78vh',
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
  searchIcon: {
    color: '#034376',
    marginLeft: 'auto',
    marginRight: '10px',
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [opens, setOpens] = useState(false);

  // search bar
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;

  //=============

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
              <IncomeHonchoLogo />
            </Link>
          </div>
          <Hidden smDown>
            <Button component={Link} to='/deals' disableRipple>
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
          <Hidden smDown>
            <Button disableRipple>Sign In</Button>
          </Hidden>
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

      {/* popover for search */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </Popover>
    </div>
  );
};

export default HeaderMiddle;
