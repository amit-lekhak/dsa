// const numbers = [33, 22, 99, 45, 18, 2, 6, 1, 101, 55, 269, 3];
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(numbers) {
  const newArray = [];
  let shouldAdd;
  let shouldShift = false;
  let temp1;
  let temp2;
  let length;
  newArray.push(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    shouldAdd = true;
    shouldShift = false;
    length = newArray.length;
    for (let j = 0; j < length; j++) {
      if (!shouldShift) {
        if (numbers[i] < newArray[j]) {
          temp1 = newArray[j];
          if (newArray[j + 1] === undefined) {
            newArray[j + 1] = newArray[j];
            newArray[j] = numbers[i];
            shouldAdd = false;
            break;
          }
          newArray[j] = numbers[i];
          shouldAdd = false;
          shouldShift = true;
        }
      }
      if (shouldShift) {
        temp2 = newArray[j + 1];
        newArray[j + 1] = temp1;
        temp1 = temp2;
      }
    }
    if (shouldAdd) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

console.log(insertionSort(numbers));
