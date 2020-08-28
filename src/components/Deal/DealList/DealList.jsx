import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridList: {
    flexWrap: 'nowrap',
  },
  card: {
    height: '320px',
    width: 'auto',
  },
  cardContent: {
    height: '85px',
    position: 'relative',
  },
  priceText: {
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  crossedLine: {
    textDecoration: 'line-through',
    color: 'red',
  },
  items: {
    display: 'flex',
    marginBottom: '10px',
  },
}));

const DealList = ({ products, category_label }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Link
          to={`/category/${category_label}`}
          style={{ textDecoration: 'none' }}
        >
          <Typography variant='h6' color='textSecondary' gutterBottom>
            {category_label}
          </Typography>
        </Link>
      </Grid>
      <Grid container className={classes.items} spacing={1}>
        {products
          .filter((item, idx) => idx < 4)
          .map((i) => (
            <Grid item key={i.id} xs={12} sm={6} md={3}>
              <Card key={i.id} className={classes.card}>
                <CardActionArea
                  component={Link}
                  to={`/category/${category_label}/deals/${i.id}`}
                >
                  <CardMedia
                    component='img'
                    alt={i.title}
                    height='140px'
                    image={i.imageUrl}
                    title={i.title}
                    style={{ paddingTop: '5px' }}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant='body2'
                      component='h2'
                      style={{ textAlign: 'initial' }}
                    >
                      {i.title.substring(0, 50)}...
                    </Typography>
                    <div className={classes.priceText}>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className={classes.crossedLine}
                      >
                        ${i.normalPrice}
                      </Typography>
                      &nbsp;&nbsp;
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        ${i.offerPrice}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant='outlined'
                    fullWidth
                    disableElevation
                    component={Link}
                    to={`/category/${category_label}/deals/${i.id}`}
                    color='textSecondary'
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Grid container direction='row' justify='center'>
        <Link
          to={`/category/${category_label}`}
          style={{ textDecoration: 'none' }}
        >
          <Button
            color='secondary'
            variant='text'
            disableRipple
            disableFocusRipple
          >
            See more
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default DealList;
