import React from "react";

import { connect } from "react-redux";
import {
  HistoryItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButtonContainer,
} from "../History/HistoryPageCard.styles";

import { removeFavItem } from "../../redux/hearted/hearted.action";

const HeartedPageCard = ({ item, removeHearted }) => {
  return (
    <HistoryItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt="img" />
      </ImageContainer>
      <TextContainer>{item.title.slice(0, 50)}...</TextContainer>
      <TextContainer>${item.offerPrice}</TextContainer>
      <RemoveButtonContainer onClick={() => removeHearted(item)}>
        &#10005;
      </RemoveButtonContainer>
    </HistoryItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeHearted: (item) => dispatch(removeFavItem(item)),
});

export default connect(null, mapDispatchToProps)(HeartedPageCard);
