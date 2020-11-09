import HeartedActionTypes from "./hearted.types";
import { addHeartedItem, removeHeartedItem } from "./hearted.utils";

const INITIAL_STATE = {
  HeartedItems: [],
};

const heartedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeartedActionTypes.ADD_HEARTED_ITEM:
      return {
        ...state,
        HeartedItems: addHeartedItem(state.HeartedItems, action.payload),
      };

    case HeartedActionTypes.REMOVE_HEARTED_ITEM:
      return {
        ...state,
        HeartedItems: removeHeartedItem(state.HeartedItems, action.payload),
      };

    default:
      return state;
  }
};

export default heartedReducer;
