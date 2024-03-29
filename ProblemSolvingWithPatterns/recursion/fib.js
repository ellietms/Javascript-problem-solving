// fibonacci sequence

function fib(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  if(number === 0){
      return 0;
  }
  return fib(number - 1) + fib(number - 2); 
}

console.log(fib(0));
console.log(fib(4)); // 3     
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
