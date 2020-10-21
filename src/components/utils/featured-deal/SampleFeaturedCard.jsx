import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/history/history.action';

const useStyles = makeStyles((theme) => ({
  rootCard: {
    maxWidth: 345,
    marginTop: '6%',
    border: '1px solid #8C8A8A',
  },
  media: {
    height: '130px',
    marginBottom: '2%',
    width: 'auto',
  },
  orgPrice: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    color: '#595959',
    textDecoration: 'line-through',
  },
  offerPrice: {
    fontFamily: 'Roboto',
    fontSize: '15px',
    color: '#008EFF',
  },
}));

const SampleFeaturedCard = ({ featuredProducts, category_label, addItem }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {featuredProducts
        .filter((deal, i) => i < 8)
        .map((deal) => (
          <Grid item xs={6} sm={3} xl={2}>
            <Card className={classes.rootCard}>
              <CardActionArea
                component={Link}
                to={`/category/${category_label}/deals/${deal.id}`}
                onClick={() => addItem(deal)}
              >
                <CardMedia className={classes.media} image={deal.imageUrl} />
                <CardContent style={{ padding: '2%' }}>
                  <Typography>
                    <Rating
                      name='half-rating-read'
                      size='small'
                      defaultValue={deal.reviewRating}
                      readOnly
                    />
                  </Typography>
                  <div style={{ height: '5.5vh' }}>
                    <Typography gutterBottom style={{ fontSize: '13px' }}>
                      {deal.title.slice(0, 40)}
                      {'...'}
                    </Typography>
                  </div>

                  <Typography variant='subtitle2' component='h2'>
                    <span className={classes.offerPrice}>
                      ${deal.offerPrice}
                    </span>
                    {'  '}
                    <span className={classes.orgPrice}>
                      ${deal.normalPrice}
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  fullWidth
                  variant='outlined'
                  size='small'
                  color='primary'
                  component={Link}
                  to={`/category/${category_label}/deals/${deal.id}`}
                  onClick={() => addItem(deal)}
                >
                  View Detailss
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (deal) => dispatch(addItem(deal)),
});

export default connect(null, mapDispatchToProps)(SampleFeaturedCard);
