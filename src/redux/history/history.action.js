import HistoryActionTypes from './history.types';

export const addItem = (item) => ({
  type: HistoryActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: HistoryActionTypes.REMOVE_ITEM,
  payload: item,
});
