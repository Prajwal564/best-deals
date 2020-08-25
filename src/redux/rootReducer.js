import { combineReducers } from 'redux';

import dealReducer from './deals/deal.reducer';

const rootReducer = combineReducers({
  deal: dealReducer,
});

export default rootReducer;
