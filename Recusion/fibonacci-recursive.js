// let sum = 1;
// let prev = 1;

// function fibIterative(index) {
//   if (index === 0) return 0;
//   if (index === 1 || index === 2) return 1;

//   let sum = 1;
//   let prev = 1;

//   for (let i = 3; i <= index; i++) {
//     const temp = sum;
//     sum += prev;
//     prev = temp;
//   }

//   return sum;
// }

// function fibRecursive(index) {
//   if (index === 0) return 0;
//   if (index === 1 || index === 2) return sum;
//   const temp = sum;
//   sum = sum + prev;
//   prev = temp;

//   return fibRecursive(index - 1);
// }

function fibRecursive(n) {
  if (n < 2) return n;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibIterative(8));
console.log(fibRecursive(8));
