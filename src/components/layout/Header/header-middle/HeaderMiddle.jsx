import React from 'react';

import { ReactComponent as IncomeHonchoLogo } from './income_honcho.svg';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1vh 2vw',
    background: '#ffffff',
  },
  logo: {
    flexGrow: 1,
  },
}));

const HeaderMiddle = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <div className={classes.logo}>
          <Link to='/'>
            <IncomeHonchoLogo />
          </Link>
        </div>

        <Button component={Link} to='/deals' disableRipple>
          <b>Deals</b>
        </Button>
        <Button disableRipple>
          <b>Stores</b>
        </Button>
        <Button disableRipple>
          <b>Forums</b>
        </Button>
        <Button disableRipple>
          <b>Blogs</b>
        </Button>
        <Button disableRipple>
          <b>About Us</b>
        </Button>
      </Toolbar>
    </div>
  );
};

export default HeaderMiddle;
