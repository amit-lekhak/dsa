const numbers = [33, 22, 99, 45, 18, 2, 6, 1, 101, 55, 269, 3];

function bubbleSort(numbers) {
  let count = numbers.length;

  while (count > 1) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        const temp = numbers[i + 1];
        numbers[i + 1] = numbers[i];
        numbers[i] = temp;
      }
    }
    count--;
  }
  return numbers;
}

console.log(bubbleSort(numbers));
