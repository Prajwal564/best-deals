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
}));

const CategoryList = ({ category_label, products }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container>
        <Typography variant='h5' color='textSecondary' gutterBottom>
          {category_label}
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {products.map((i) => (
          <Grid item xs={6} sm={4} md={3} xl={2} key={i.id}>
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
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
