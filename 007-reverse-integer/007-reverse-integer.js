/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let number = x
	let res = 0
	let negative = false
	if (number < 0) { // 如果为负数,先取反
		negative = true
		number = 0 - number
	}
	while (number) {
		let last = number % 10 // shift
		number = Math.floor(number / 10)
		res = res * 10 +last // push
	}
	if (negative) res = 0 - res
	if(res > (2**31 - 1) || res < (0 - 2**31)) return 0 // 范围
	return res
};