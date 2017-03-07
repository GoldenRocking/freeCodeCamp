//字符串每个单词首字母大写，其余的字母小写
//titleCase("sHoRt AnD sToUt") should return "Short And Stout".

function titleCase(str) {
    	
	var arr = str.toLowerCase().split(' ');
	var newArr = [];
	arr.forEach(function (word) {
		var capWord = word.charAt(0).toUpperCase() + word.substr(1);
		newArr.push(capWord);
	});
	
	return newArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));