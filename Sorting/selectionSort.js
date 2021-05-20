const numbers = [33, 22, 99, 45, 18, 2, 6, 1, 101, 55, 269, 3];

function selectorSort(numbers) {
  let smallest;
  let swapIndex;
  for (let i = 0; i < numbers.length; i++) {
    smallest = numbers[i];
    swapIndex = null;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < smallest) {
        smallest = numbers[j];
        swapIndex = j;
      }
    }
    console.log(swapIndex);
    if (swapIndex !== null) {
      numbers[swapIndex] = numbers[i];
      numbers[i] = smallest;
    }
    console.log(numbers);
  }
  return numbers;
}

console.log(selectorSort(numbers));
