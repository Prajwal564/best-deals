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

import { connect } from 'react-redux';
import { addItem } from '../../../redux/history/history.action';

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
    border: '0.5px solid #8C8A8A',
  },
  cardContent: {
    height: '90px',
    position: 'relative',
  },
  priceText: {
    position: 'absolute',
    bottom: '0',
    display: 'flex',
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

const DealList = ({ products, category_label, addItem }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Link
          to={`/category/${category_label}`}
          style={{ textDecoration: 'none' }}
        >
          <Typography variant='h6' color='inherit' gutterBottom>
            {category_label}
          </Typography>
        </Link>
      </Grid>
      <Grid container className={classes.items} spacing={2}>
        {products
          .filter((item, idx) => idx < 4)
          .map((i) => (
            <Grid item key={i.id} xs={6} sm={4} md={3} xl={2}>
              <Card key={i.id} className={classes.card}>
                <CardActionArea
                  component={Link}
                  to={`/category/${category_label}/deals/${i.id}`}
                  onClick={() => addItem(i)}
                >
                  <CardMedia
                    component='img'
                    alt={i.title}
                    height='140px'
                    image={i.imageUrl}
                    title={i.title}
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
                        color='inherit'
                        component='p'
                        className={classes.crossedLine}
                      >
                        ${i.normalPrice}
                      </Typography>
                      &nbsp;&nbsp;
                      <Typography variant='body2' color='inherit' component='p'>
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
                    onClick={() => addItem(i)}
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
            color='inherit'
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (i) => dispatch(addItem(i)),
});

export default connect(null, mapDispatchToProps)(DealList);
