//给一个数组包含多个字数组，子数组中存放的是数组，写一个函数返回数组的子数组中的最大的数

//比如：largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]

function largestOfFour(arr) {
	// You can do this!
	arr = arr.map(function(val){
		return val.reduce(function(p,c){
			return Math.max(p,c);
		});                    
	});
	
	return arr;
}

console.log( largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
