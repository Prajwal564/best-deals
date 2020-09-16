export const addHistoryItem = (HeartedItems, HeartedItemToAdd) => {
  const existingItem = HeartedItems.find(
    (HeartedItem) => HeartedItem.id === HeartedItemToAdd.id
  );

  if (existingItem) {
    return HeartedItems.map((HeartedItem) =>
      HeartedItem.id === HeartedItemToAdd.id
        ? { ...HeartedItem, quantity: HeartedItem.quantity + 1 }
        : HeartedItem
    );
  }

  return [...HeartedItems, { ...HeartedItemToAdd, quantity: 1 }];
};

// export const removeHistoryItem = (HistoryItems, HistoryItemToRemove) => {
//   const existingItem = HistoryItems.find(
//     (HistoryItem) => HistoryItem.id === HistoryItemToRemove.id
//   );

//   if (existingItem.quantity === 1) {
//     return HistoryItems.filter(
//       (HistoryItem) => HistoryItem.id !== HistoryItemToRemove.id
//     );
//   }

//   return HistoryItems.map((HistoryItem) =>
//     HistoryItem.id === HistoryItemToRemove.id
//       ? { ...HistoryItem, quantity: HistoryItem.quantity - 1 }
//       : HistoryItem
//   );
// };
