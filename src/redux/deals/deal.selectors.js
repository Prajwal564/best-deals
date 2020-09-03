import { createSelector } from 'reselect';

const selectDeal = (state) => state.deal;

export const selectCollections = createSelector(
  [selectDeal],
  (deal) => deal.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectDeal],
  (deal) => deal.isFetching
);
