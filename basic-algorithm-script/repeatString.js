//传入一个字符串和数字，如果数字不是正数的话，返回‘’，否则返回字符串
//比如:repeatStringNumTimes("*", 3) should return "***".
//repeatStringNumTimes("abc", 4) should return "abcabcabcabc"
// repeatStringNumTimes("abc", -2) should return ""

function repeatStringNumTimes(str, num) {
	// repeat after me
	var temp = str;
	if(num <= 0)
	{
		 str = "";   
	}else
	{
		 for(var i = 1;i<num;i++)
			 str += temp;
	}
	return str;
}

console.log(repeatStringNumTimes("abc", 3));