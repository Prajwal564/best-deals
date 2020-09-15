import HeartedActionTypes from './hearted.types';

export const addItem = (item) => ({
  type: HeartedActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: HeartedActionTypes.REMOVE_ITEM,
  payload: item,
});
