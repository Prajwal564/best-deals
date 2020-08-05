import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridList: {
    flexWrap: "nowrap",
  },
  card: {
    marginBottom: "30px",
  },
  cardContent: {
    height: "120px",
    position: "relative",
  },
  priceText: {
    position: "absolute",
    bottom: "0",
    display: "flex",
    justifyContent: "space-between",
  },
  crossedLine: {
    textDecoration: "line-through",
    color: "red",
  },
}));

const DealList = ({ products, category_label }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item container>
        <Link
          to={`/category/${category_label}`}
          style={{ textDecoration: "none" }}
        >
          <Typography variant='h5' color='textSecondary' gutterBottom>
            {category_label}
          </Typography>
        </Link>
      </Grid>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {products
          .filter((item, idx) => idx < 4)
          .map((i) => (
            <Grid item xs={12} sm={6} md={3} key={i.id}>
              <Card key={i.id} className={classes.card} raised>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt={i.title}
                    height='250'
                    image={i.imageUrl}
                    title={i.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='body1' component='h2'>
                      {i.title.substring(0, 100)}...
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
                        &nbsp;
                      </Typography>
                      &nbsp;&nbsp;
                      <Rating
                        name='read-only'
                        value={i.reviewRating}
                        readOnly
                        size='small'
                        className={classes.rating}
                      />
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
          style={{ textDecoration: "none" }}
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
