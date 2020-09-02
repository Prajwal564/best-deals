import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../../../redux/deals/deal.selectors';

// material ui core
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbarStyle: {
    width: '100%',
    backgroundColor: '#034376',
    top: '60px',
    // height: '65px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },

  search: {
    display: 'flex',
    margin: 'auto',
    paddingRight: '10%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    maxheight: '45px',
  },

  formControl: {
    backgroundColor: '#FFFFFF',
    borderRadius: '2px 0px 0px 2px',
    borderRightStyle: 'solid',
    borderRightColor: '#E0DCDC',
    borderRightWidth: '3px',
    width: '30%',
    marginTop: '1%',
    marginBottom: '1%',
    height: '45px',
  },

  input: {
    backgroundColor: '#fff',
    width: '50%',
    height: '45px',
    paddingLeft: '10px',
  },
  searchIcon: {
    display: 'flex',
    backgroundColor: '#018E01',
    width: '40px',
    borderRadius: '0px 2px 2px 0px',
    height: '45px',
  },
  icon: {
    margin: 'auto',
  },

  button: {
    height: '45px',
  },

  selectEmpty: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: '45px',
    paddingBottom: '15px',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 500,
    maxWidth: 50,
    '&::-webkit-scrollbar': {
      width: '0.4em',
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
  drawer: {
    flexShrink: 0,
  },

  drawerPaperMobile: {
    height: '100vh',
  },
  drawerPaper: {
    position: 'fixed',
    top: '125px',
    bottom: '15px',
    width: 'auto',
    height: '90vh',
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
}));

const HeaderBottom = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [opens, setOpens] = useState(false);

  const handleDrawerOpen = () => {
    setOpens(!opens);
  };

  const handleDrawerClose = () => {
    setOpens(false);
  };

  // select bar state

  const [select, setSelect] = useState({
    items: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setSelect({
      ...select,
      [name]: event.target.value,
    });
  };

  // ============

  // drawer list component

  const DrawerList = () => (
    <List>
      {data.map(({ category_label }) => (
        <>
          <Link
            to={`/category/${category_label}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItem button>
              <ListItemText>{category_label}</ListItemText>
            </ListItem>
          </Link>
          <Divider />
        </>
      ))}
    </List>
  );

  //=================

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Hidden mdDown>
            <Typography variant='h6' noWrap>
              All Department
            </Typography>
          </Hidden>
          <div className={classes.search}>
            <FormControl className={classes.formControl} variant='filled'>
              <Select
                value={select.items}
                onChange={handleChange}
                name='items'
                className={classes.selectEmpty}
                disableUnderline
                displayEmpty
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                  classes: { paper: classes.menuPaper },
                }}
              >
                <MenuItem value=''>Select Category</MenuItem>
                {data.map((i) => (
                  <MenuItem value={i.category_id}>{i.category_label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <InputBase placeholder='Search' className={classes.input} />

            <IconButton className={classes.searchIcon} color='inherit'>
              <SearchIcon className={classes.icon} />
            </IconButton>
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
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(HeaderBottom);
