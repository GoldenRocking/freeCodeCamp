//传入一个数组和数字。返回数组所传数字下标之后的元素
/*
 如：slasher([1, 2, 3], 2) should return [3].
    slasher([1, 2, 3], 0) should return [1, 2, 3].
    slasher([1, 2, 3], 9) should return [].

*/


function slasher(arr, howMany) {
	// it doesn't always pay to be first
	return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 9));