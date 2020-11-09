import React from "react";
import { connect } from "react-redux";
import {
  HistoryItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButtonContainer,
} from "./HistoryPageCard.styles";

import { removeItem } from "../../redux/history/history.action";

const HistoryPageCard = ({ item, removeItem }) => {
  return (
    
      <HistoryItemContainer>
      
        <ImageContainer>
          <img src={item.imageUrl} alt="img" />
        </ImageContainer>
        <TextContainer>{item.title.substring(0, 50)}...</TextContainer>
        <TextContainer>${item.offerPrice}</TextContainer>
        <RemoveButtonContainer onClick={() => removeItem(item)}>
          &#10005;
        </RemoveButtonContainer>
      </HistoryItemContainer>
    
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(HistoryPageCard);
