// Assuming n is integer & n >= 0

// Iterative
// Complexity is O(n)
function sum_to_n_a(n: number): number {
	var sum = 0;
	for (let i = 0; i <= n; i++) { // i starts from 0 works with n = 0
		sum += i;
	}
	return sum;
}

// Recursive
// Complexity is also O(n), but with added overhead of function calls & maintaining a call stack
function sum_to_n_b(n: number): number {
	if (n < 2) {
		return n;
	} else {
		return n + sum_to_n_b(n - 1);
	}
}

// By the power of math: the Gauss formula
// O(1)
function sum_to_n_c(n: number): number {
	return (1 + n) * n / 2;
}

// For testing purpose
console.log(sum_to_n_a(999));
console.log(sum_to_n_b(1000));
console.log(sum_to_n_c(1001));