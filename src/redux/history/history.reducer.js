import HistoryActionTypes from './history.types';
import { addHistoryItem, removeHistoryItem } from './history.utils';

const INITIAL_STATE = {
  HistoryItems: [],
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryActionTypes.ADD_ITEM:
      return {
        ...state,
        HistoryItems: addHistoryItem(state.HistoryItems, action.payload),
      };

    case HistoryActionTypes.REMOVE_ITEM:
      return {
        ...state,
        HistoryItems: removeHistoryItem(state.HistoryItems, action.payload),
      };

    default:
      return state;
  }
};

export default historyReducer;
