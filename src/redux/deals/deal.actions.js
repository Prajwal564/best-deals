import DealActionTypes from './deal.types';

export const fetchCollectionsStart = () => ({
  type: DealActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: DealActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: DealActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
