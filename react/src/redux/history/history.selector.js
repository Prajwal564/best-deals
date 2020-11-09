import { createSelector } from 'reselect';

const selectHistory = (state) => state.history;

export const selectHistoryItems = createSelector(
  [selectHistory],
  (history) => history.HistoryItems
);
