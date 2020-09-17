export const addHeartedItem = (HeartedItems, HeartedItemToAdd) => {
  const existingItem = HeartedItems.find(
    (HeartedItem) => HeartedItem.title === HeartedItemToAdd.title
  );

  if (existingItem) {
    return HeartedItems.map((HeartedItem) =>
      HeartedItem.title === HeartedItemToAdd.title
        ? { ...HeartedItem, quantity: HeartedItem.quantity + 1 }
        : HeartedItemToAdd
    );
  }

  return [...HeartedItems, { ...HeartedItemToAdd, quantity: 1 }];
};

export const removeHeartedItem = (HeartedItems, HeartedItemToRemove) => {
  return HeartedItems.filter(
    (HeartedItem) => HeartedItem.title !== HeartedItemToRemove.title
  );
};
