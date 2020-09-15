import HeartedActionTypes from './hearted.types';

const INITIAL_STATE = {
  HeartedItems: [],
};

const HeartedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeartedActionTypes.ADD_ITEM:
      return {
        ...state,
        HeartedItems: []
      };

    case HeartedActionTypes.REMOVE_ITEM:
      return {
        ...state,
        HeartedItems: []
      };

    default:
      return state;
  }
};

export default HeartedReducer;
