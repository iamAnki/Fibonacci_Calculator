export function fib(n) {
  if (n < 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
function callFib() {
  var n = document.getElementById("n").value;
  document.getElementById("answer").innerHTML = fib(n);
}
