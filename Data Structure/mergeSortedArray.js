// [0,3,4,31],[4,6,30]

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

// function mergeSortedArray(arr1,arr2) {

//     arr1.forEach(i => arr2.push(i));
//     console.log(arr2);
//     arr2.sort((a,b) => a-b);
//     console.log(arr2);
//     return arr2;
// }

function mergeSortedArray(arr1, arr2) {
  const mergedArray = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while ( arr1Item || arr2Item) {
    if (!arr2Item ||arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

const result = mergeSortedArray(array1, array2);
console.log(result);
