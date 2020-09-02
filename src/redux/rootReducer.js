import { combineReducers } from 'redux';

import dealReducer from './deals/deal.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  deal: dealReducer,
  user: userReducer,
});

export default rootReducer;
