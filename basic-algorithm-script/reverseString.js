//字符串倒置
/*
	1.字符串转数组
	2.数组逆序
	3.数组拼字符串 
*/
function reverseString(str) {
	str = str.split('').reverse().join('');
	return str;
}

console.log(reverseString('GYHJkjliawjdwio'));