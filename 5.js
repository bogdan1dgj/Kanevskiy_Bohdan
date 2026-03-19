function findMinMax(arr) {
  if (arr.length === 0) {
    return { max: undefined, min: undefined };
  }

  let max = arr[0];
  let min = arr[0];

 
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }

  return { max, min };
}


const numbers = [3, 1, 9, -2, 5, 10];
console.log(findMinMax(numbers));