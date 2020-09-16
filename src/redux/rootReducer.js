import { combineReducers } from "redux";

import dealReducer from "./deals/deal.reducer";
import HeartedReducer from "./hearted/hearted.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  deal: dealReducer,
  user: userReducer,
  hearted: HeartedReducer,
});

export default rootReducer;
