import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IncomeHonchoLogo } from './income_honcho.svg';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

//hover pop up
import Popover from 'material-ui-popup-state/HoverPopover';
import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1px 2px',
  },
  appbarStyle: {
    backgroundColor: '#ffffff',
  },
  paper: {
    width: '60%',
  },
  logo: {
    flexGrow: 1,
  },
  popover: {
    background: '#ffffff',
    width: '700px',
    height: '250px',
    margin: 10,
  },
  popoverTitle: {
    margin: 10,
    borderBottom: '1px solid gray',
    padding: '10px 0',
    fontWeight: 'bold',
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appbarStyle}>
        <Toolbar>
          <div className={classes.logo}>
            <Link to='/'>
              <IncomeHonchoLogo />
            </Link>
          </div>
          <Hidden smDown>
            <Button component={Link} to='/deals' disableRipple>
              <b>Deals</b>
            </Button>
            <Button disableRipple {...bindHover(popupState)}>
              <b>Stores</b>
            </Button>

            {/* hover popover for stores */}

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              disableRestoreFocus
            >
              <div className={classes.popover}>
                <Typography className={classes.popoverTitle}>
                  Find coupons by Stores
                </Typography>
              </div>
            </Popover>
            <Button disableRipple>
              <b>Forums</b>
            </Button>
            <Button disableRipple>
              <b>Blogs</b>
            </Button>
            <Button disableRipple>
              <b>About Us</b>
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderMiddle;
