//Remove all falsy values from an array.
//移除数组中所有的 falsy 值
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

/*
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]) should return []
bouncer([1, null, NaN, 2, undefined]) should return [1, 2]

*/

function falsyFilter(item)
{
	if(item)
		 return true;
	else
		return false;
}

function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	return arr.filter(falsyFilter);
	
}

console.log(falsyFilter(''))
console.log(bouncer([7, "ate", "", false, 9]));