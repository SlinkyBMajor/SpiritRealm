/**
 * return a random item from an array, as well as the index of said item.
 * @param array
 * @returns [itemPicked, indexOfSaidItem or null]
 */

export const randomFromArray = (array: any[]): [item: any, index: number] => {
  console.log(array);
  // If the array is faulty, or empty, return a new empty array
  if (!Array.isArray(array) || !array.length) {
    throw new Error("randomFromArray got an empty or non array argument.");
    /* return [null, null]; */
  }
  const index = Math.floor(Math.random() * array.length);
  return [array[index], index];
};
