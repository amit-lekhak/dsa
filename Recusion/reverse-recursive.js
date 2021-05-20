//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  console.log(str.length);
  return str.split('').reverse().join('');
}

function reverseStringRecursive(str) {
  if (str.length === 1) return str;
  const arr = str.split('');

  return arr.pop() + reverseStringRecursive(arr.join(''));
}

// reverseStringIterative('yoyo mastery');

reverseStringRecursive('yoyo mastery');

//should return: 'yretsam oyoy'
