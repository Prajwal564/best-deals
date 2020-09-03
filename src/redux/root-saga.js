import { all, call } from 'redux-saga/effects';

import { dealSaga } from './deals/deal.sagas';

export default function* rootSaga() {
  yield all([call(dealSaga)]);
}
