function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1;
  for (let i = 3; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
console.log(fibonacci(1)); 
console.log(fibonacci(5)); 
console.log(fibonacci(8)); 

module.exports = fibonacci;
