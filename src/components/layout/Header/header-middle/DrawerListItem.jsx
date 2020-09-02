import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const DrawerListItem = (props) => {
  const { category_label, setCurrentTab, currentTab } = props;

  const clickHandler = () => {
    setCurrentTab(category_label);
  };
  return (
    <ListItem
      button
      onClick={clickHandler}
      selected={category_label == currentTab}
    >
      <ListItemText>{category_label}</ListItemText>
    </ListItem>
  );
};

export default DrawerListItem;
