import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectHistoryItems } from "../../redux/history/history.selector";

import Grid from "@material-ui/core/Grid";
import Layout from "../Layout";
import HeartedPageCard from "./HeartedPageCard";

const HeartedPage = ({ HeartedItems }) => {
  return (
    <Layout>
      <Grid item xs={12}>
        {/* Content goes here */}
        {HeartedItems.length ? (
          HeartedItems.map((item) => (
            <HeartedPageCard key={item.id} item={item} />
          ))
        ) : (
          <h2>No Favorites</h2>
        )}
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  HeartedItems: state.hearted.HeartedItems,
});

export default connect(mapStateToProps)(HeartedPage);
