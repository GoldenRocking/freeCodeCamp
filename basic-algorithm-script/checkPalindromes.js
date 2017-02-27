//判断字符串是不是回文字符串
function palindrome(str) {
	// Good luck!
	var strStripped = str.replace(/[\W_]/g, '').toLowerCase();
	var strReverse = strStripped.split('').reverse().join('');
	return strStripped === strReverse ;
}

console.log(palindrome('eye_'));
