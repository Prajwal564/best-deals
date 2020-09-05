import React, { useState } from 'react';

import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';

//Sign In Dialog
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

//colors
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#262626',
    marginTop: '4%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnFacebook: {
    backgroundColor: '#4267B2',
    height: '7vh',
    color: 'white',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
  btnGoogle: {
    backgroundColor: '#DD4B39',
    borderRadius: '4px',
    height: '7vh',
    color: 'white',
    '&:hover': {
      backgroundColor: red[600],
    },
  },
  btnSignIn: {
    backgroundColor: '#018E01',
    height: '7vh',
    color: 'white',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: green[500],
    },
  },
}));

const SignInPopUp = () => {
  const classes = useStyles();

  //Sign In Popover
  const [openSignIn, setOpenSignIn] = useState(false);

  const [username, setUsername] = useState('');

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
    <>
      <Hidden smDown>
        <Button disableRipple onClick={handleSignInOpen}>
          Sign In
        </Button>
      </Hidden>

      {/* //==========Dialog============// */}
      <Dialog maxWidth='xs' onClose={handleSignInClose} open={openSignIn}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <DialogTitle align='center'>Sign In</DialogTitle>

        <DialogContent>
          <DialogActions>
            <Button
              className={classes.btnFacebook}
              disableRipple
              fullWidth
              size='medium'
              variant='contained'
              startIcon={<FacebookIcon>facebook</FacebookIcon>}
            >
              Sign In with Facebook
            </Button>{' '}
          </DialogActions>
          <DialogActions>
            <Button
              className={classes.btnGoogle}
              fullWidth
              disableRipple
              size='medium'
              variant='contained'
            >
              <FontAwesomeIcon
                icon={faGooglePlusG}
                style={{ marginRight: '8px' }}
              />
              Sign In with Google
            </Button>{' '}
          </DialogActions>
          <Typography variant='subtitle1' align='center'>
            OR
          </Typography>

          <DialogActions>
            <form>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id={username}
                label='Email Address'
                type='email'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={handleUserName}
              />

              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </form>
          </DialogActions>
          <DialogActions style={{ display: 'block', align: 'left' }}>
            <Link href='#' underline='hover' align='left'>
              Forgot password?
            </Link>
          </DialogActions>

          <DialogActions>
            <Button
              className={classes.btnSignIn}
              fullWidth
              disableRipple
              type='submit'
              size='medium'
              variant='contained'
              onSubmit={handleSubmit}
            >
              Sign In
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignInPopUp;
