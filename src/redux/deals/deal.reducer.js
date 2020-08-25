import DEAL_DATA from './deal.data';

const INITIAL_STATE = {
  collections: DEAL_DATA,
};

const dealReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dealReducer;
