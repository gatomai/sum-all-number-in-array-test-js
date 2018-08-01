function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
return sum;
}

module.exports = sumItems;
// const arr = [1,2,3];
// console.log(sumItems(arr));
