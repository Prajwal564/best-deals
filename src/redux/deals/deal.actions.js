import DealActionTypes from './deal.types';
import axios from 'axios';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl =
    'https://s3-us-west-1.amazonaws.com/incomehoncho.data/2020/07/2020-07-20.json';

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

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    return axios
      .get(proxyUrl + targetUrl)
      .then((response) => {
        let collectionsMap = response.data.offers;
        console.log(collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
