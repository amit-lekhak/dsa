function recurringChar(arr) {
  let newValue = {};

  for (let i = 0; i < arr.length; i++) {
    if (newValue[arr[i]] !== undefined) return arr[i];

    newValue[arr[i]] = arr[i];
  }
  return 'undefined';
}

var inputArr1 = [2, 4, 1, 1, 2, 1, 1];
var inputArr2 = [1, 2, 3, 4, 5];

console.log(recurringChar(inputArr1));
console.log(recurringChar(inputArr2));

// function recurr(input) {
//   let newArray = [];
//   let jPos;
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         if (jPos === undefined || jPos > j) {
//           jPos = j;
//         }
//       }
//     }
//   }

//   if (jPos !== undefined) {
//     return input[jPos];
//   }
//   return undefined;
// }

// recurr([1, 2, 1, 2, 1, 2, 3]);
