// I want you to write a function which takes an array as a parameter.
//  That array will itself contain some number of arrays.
//  I want your function to return an object with one method, called next.
//  Each time someone calls next, it should return the next element from the next array.
// If one array is exhausted you should skip over it to the next array.


// Find the next non-undefined element" is a single operation, which you don't do the same each time
//  And you don't look arbitrarily far ahead in the array,
//  you always look either one or two elements forward, rather than keeping looking until you find one
// So... Work out the general way of finding the next element, and write that, maybe as a method of its own


let example = [ 
  [1, 2, 3],
  [],
  ["a", "b", "c"],
  [6,7,8,9]
];
function lazyMerger(array) {
  let firstIndex = 0;
  let secondIndex = 0;
  let element;
  const result = {
    next: () => {
      while(array[firstIndex][secondIndex] === undefined)
      {
        firstIndex = firstIndex + 1;
      }
      if(array[firstIndex][secondIndex] !== undefined){
        element = array[firstIndex][secondIndex];
      }
      if(firstIndex === array.length - 1){
        firstIndex = -1;
        secondIndex = secondIndex + 1;
      }
      return element;
}
  }
return result
}
const obj = lazyMerger(example);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());