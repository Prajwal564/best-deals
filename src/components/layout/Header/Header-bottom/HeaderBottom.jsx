import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material ui core
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// deal json file
import deal from '../../../../data/deal.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbarStyle: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#034376',
    maxHeight: '70px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    fontSize: '14px',
  },

  search: {
    display: 'flex',
    marginLeft: '8%',
    width: '55%',
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
    width: '25%',
    marginTop: '1%',
    marginBottom: '1%',
    height: '45px',
  },

  input: {
    backgroundColor: '#fff',
    width: '25vw',
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
    top: '8px',
    width: 'auto',
    paddingBottom: '6px',
    fontSize: '12px',
    fontFamily: 'Roboto',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: '18vw',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '18vw',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function HeaderBottom() {
  const classes = useStyles();
  const theme = useTheme();
  const [opens, setOpens] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpens(true);
  };

  const handleDrawerClose = () => {
    setOpens(false);
  };

  // deal json file state

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let offerDeal = deal.offers;
      setData(offerDeal);
    };
    fetchData();
  }, []);

  // -----------

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbarStyle}>
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
          <Typography className={classes.title} variant='button' noWrap>
            All Department
          </Typography>

          <div className={classes.search}>
            <FormControl className={classes.formControl}>
              <Button
                // ref={anchorRef}
                aria-haspopup='true'
                onClick={handleClick}
                fullWidth
                className={classes.button}
              >
                <Typography variant='overlay' style={{ marginRight: '2.2vw' }}>
                  All Category
                </Typography>
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id='long-menu'
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 300,
                    width: '20ch',
                  },
                }}
              >
                {data.map((i) => (
                  <MenuItem key={i.category_id} onClick={handleClose}>
                    {i.category_label}
                  </MenuItem>
                ))}
              </Menu>
            </FormControl>
            <InputBase
              placeholder='Search'
              className={classes.input}
              fullWidth
            />

            <IconButton className={classes.searchIcon} color='inherit'>
              <SearchIcon className={classes.icon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* ===== App bar drawer ====== */}

      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={opens}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
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
      </Drawer>
    </div>
  );
}
