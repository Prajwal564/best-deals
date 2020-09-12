import React from 'react';

//material-ui
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

//material-ui icons
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    backgroundColor: '#018E01',
    color: '#cef5cb',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  typo: {
    flex: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg' className={classes.container}>
        <Typography variant='body2' className={classes.typo}>
          {'© '}
          {new Date().getFullYear()}{' '}
          <Link color='inherit' href='!#'>
            Income Honcho.
          </Link>
          {' All Rights Reserved.'}
        </Typography>
        <Hidden xsDown>
          <IconButton>
            <FacebookIcon style={{ fill: '#cef5cb' }} />
          </IconButton>
          <IconButton>
            <TwitterIcon style={{ fill: '#cef5cb' }} />
          </IconButton>
          <IconButton>
            <InstagramIcon style={{ fill: '#cef5cb' }} />
          </IconButton>
          <IconButton>
            <PinterestIcon style={{ fill: '#cef5cb' }} />
          </IconButton>
        </Hidden>
      </Container>
    </footer>
  );
};

export default Footer;
