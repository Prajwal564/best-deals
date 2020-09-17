import HeartedActionTypes from "./hearted.types";

export const addFavItem = (item) => ({
  type: HeartedActionTypes.ADD_HEARTED_ITEM,
  payload: item,
});

export const removeFavItem = (item) => ({
  type: HeartedActionTypes.REMOVE_HEARTED_ITEM,
  payload: item,
});
