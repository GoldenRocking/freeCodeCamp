//判断一个字符串是否是以给定的字符串结尾 

//confirmEnding("Bastian", "n") should return true.
//confirmEnding("He has to give me a new name", "name") should return true.


function confirmEnding(str, target) {
	// "Never give up and good luck will find you."
	// -- Falcor
	var last = str.substring(str.length - target.length);
	return last === target;

}

console.log(confirmEnding("Bastian", "an"));