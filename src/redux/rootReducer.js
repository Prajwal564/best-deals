import { combineReducers } from 'redux';

import dealReducer from './deals/deal.reducer';
import userReducer from './user/user.reducer';
import historyReducer from './history/history.reducer';

const rootReducer = combineReducers({
  deal: dealReducer,
  user: userReducer,
  history: historyReducer,
});

export default rootReducer;
