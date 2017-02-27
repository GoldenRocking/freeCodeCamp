function findLongestWord(str) {
	var length = 0;
	
	var strArray = str.split(' ');
	
	for(var i = 0;i < strArray.length;i++)
	{
		length = strArray[i].length > length ? strArray[i].length : length;
	}
	
	return length;
}

function findLongestWord1(str) {
	var strArray = str.split(' ');
	strArray.sort(function (a,b) {
		return b.length - a.length;
	});
		
	return strArray[0].length;
}

function findLongestWord2(str) {
	var strArray = str.split(' ');
	var lengthArray = strArray.map(function(val){
		return val.length
	});
	
	return lengthArray.reduce(function (p,c) {
		return Math.max(p, c);
	});
}

$ss = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log($ss);
console.log(findLongestWord1("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord2("The quick brownnnnnn fox jumped over the lazy dog"));