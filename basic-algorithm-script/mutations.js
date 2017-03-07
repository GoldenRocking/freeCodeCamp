//如果数组第一个元素包含数组第二个元素中的每一个字符，则返回ture，否则返回false
/*
如：mutation(["hello", "hey"]) should return false.
    mutation(["hello", "Hello"]) should return true.
    mutation(["Mary", "Aarmy"]) should return true.
    mutation(["hello", "neo"]) should return false.
*/

function mutation(arr) {
	
	for(var i=0;i<arr[1].length;i++)
	{
		 if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0)
			 return false;
	}
	
	return true;
	
}

mutation(["hello", "hey"]);