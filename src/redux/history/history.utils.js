export const addHistoryItem = (HistoryItems, HistoryItemToAdd) => {
  const existingItem = HistoryItems.find(
    (HistoryItem) => HistoryItem.id === HistoryItemToAdd.id
  );

  if (existingItem) {
    return HistoryItems.map((HistoryItem) =>
      HistoryItem.id === HistoryItemToAdd.id
        ? { ...HistoryItem, quantity: HistoryItem.quantity + 1 }
        : HistoryItem
    );
  }

  return [...HistoryItems, { ...HistoryItemToAdd, quantity: 1 }];
};

export const removeHistoryItem = (HistoryItems, HistoryItemToRemove) => {
  const existingItem = HistoryItems.find(
    (HistoryItem) => HistoryItem.id === HistoryItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return HistoryItems.filter(
      (HistoryItem) => HistoryItem.id !== HistoryItemToRemove.id
    );
  }

  return HistoryItems.map((HistoryItem) =>
    HistoryItem.id === HistoryItemToRemove.id
      ? { ...HistoryItem, quantity: 1 }
      : HistoryItem
  );
};
