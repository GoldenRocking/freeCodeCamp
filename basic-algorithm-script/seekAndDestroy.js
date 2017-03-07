//删除数组中与所有给定参数相同的元素

//比如：destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
//destroyer([2, 3, 2, 3], 2, 3) should return []. 

function destroyer(arr) {
	// Remove all the values
    var destroy = [];
	    for (var i = 1; i < arguments.length; i++) {
		destroy.push(arguments[i]);
	 }
		
	function checkList (search) {
		
		for (var j = 0; j < destroy.length; j++) {
			if (search === destroy[j]) {
				return false;
			}
		}
		return true;
	}
	return arr.filter(checkList);
}

console.log(destroyer([2, 3, 2, 3], 2, 3));