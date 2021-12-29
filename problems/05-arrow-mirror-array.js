/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

***********************************************************************/
/*const arrowMirrorArray = array => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i])
  }
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr;
}*/
const arrowMirrorArray = array => {
  let newArr = array;
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr;

}

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
