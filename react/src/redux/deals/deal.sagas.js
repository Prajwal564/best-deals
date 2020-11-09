import { takeEvery, call, put, all } from 'redux-saga/effects';

import DealActionTypes from './deal.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './deal.actions';
import { fetchDeals } from '../../api';

export function* fetchCollectionsAsync() {
  try {
    const deals = yield call(fetchDeals);
    yield put(fetchCollectionsSuccess(deals));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    DealActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* dealSaga() {
  yield all([call(fetchCollectionsStart)]);
}
