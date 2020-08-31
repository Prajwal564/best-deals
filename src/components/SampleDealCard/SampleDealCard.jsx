import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    maxWidth: 345,
    marginTop: "6%",
    border: "1px solid #8C8A8A",
  },
  media: {
    height: "130px",
    marginTop: "2%",
    marginBottom: "2%",
    width: "100%",
  },
  orgPrice: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "#595959",
    textDecoration: "line-through",
  },
  offerPrice: {
    fontFamily: "Roboto",
    fontSize: "15px",
    color: "#008EFF",
  },
}));

const SampleDealCard = ({ products }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {products
        .filter((deal, i) => i < 4)
        .map((deal) => (
          <Grid item xs={6} sm={3}>
            <Card className={classes.rootCard}>
              <CardActionArea>
                <CardMedia className={classes.media} image={deal.imageUrl} />
                <CardContent style={{ padding: "6px" }}>
                  <Typography>
                    <Rating
                      name="half-rating-read"
                      defaultValue={deal.reviewRating}
                      readOnly
                    />
                  </Typography>
                  <Typography gutterBottom style={{ fontSize: "13px" }}>
                    {deal.title.slice(0, 20)}
                    {"..."}
                  </Typography>
                  <Typography variant="subtitle2" component="h2">
                    <span className={classes.offerPrice}>
                      ${deal.offerPrice}
                    </span>
                    {"  "}
                    <span className={classes.orgPrice}>
                      ${deal.normalPrice}
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  fullWidth
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </React.Fragment>
  );
};

export default SampleDealCard;
