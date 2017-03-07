//拆分数组
//例如: chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]

function chunkArrayInGroups(arr, size) {
	// Break it up.
	
	var lastArray = [];
	
	for(var i = 0;i < arr.length/size;i++)
	{
			var tempArray = arr.slice(i*size,size*(i+1));
			lastArray.push(tempArray);
	}
	
	return lastArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));