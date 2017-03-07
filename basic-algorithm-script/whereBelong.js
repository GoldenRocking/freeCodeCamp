//返回一个数组应该对应的一个已排序数组的下标

//getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
//getIndexToIns([3, 10, 5], 3) should return 0.
//etIndexToIns([2, 20, 10], 19) should return 2.


function getIndexToIns(arr, num) {
	// Find my place in this sorted array.
	arr.push(num);
	arr.sort(compareNumbers);
	function compareNumbers(a, b) {
		return a - b;
	}
	
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i] === num)
			return i;    
	}
}

console.log(getIndexToIns([3, 10, 5], 3));
