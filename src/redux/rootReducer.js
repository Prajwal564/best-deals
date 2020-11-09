import { combineReducers } from 'redux';

import dealReducer from './deals/deal.reducer';
import heartedReducer from './hearted/hearted.reducer';
import userReducer from './user/user.reducer';

import historyReducer from './history/history.reducer';

const rootReducer = combineReducers({
  deal: dealReducer,
  user: userReducer,
  hearted: heartedReducer,
  history: historyReducer,
});

export default rootReducer;
