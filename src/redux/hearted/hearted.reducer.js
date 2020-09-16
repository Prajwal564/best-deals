import HeartedActionTypes from "./hearted.types";
import { addHistoryItem } from "./hearted.utils";

const INITIAL_STATE = {
  HeartedItems: [],
};

const HeartedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeartedActionTypes.ADD_ITEM:
      return {
        ...state,
        // HeartedItems: [...state.HeartedItems, action.payload],
        HeartedItems: addHistoryItem(state.HeartedItems, action.payload),
      };

    case HeartedActionTypes.REMOVE_ITEM:
      return {
        ...state,
        HeartedItems: [],
      };

    default:
      return state;
  }
};

export default HeartedReducer;
