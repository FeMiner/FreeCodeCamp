//重复字符串
/*2016-6-19 By沐浴星光*/
function repeatStringNumTimes(str, num) {
	var newStr="";

	for (var i = num; i >0; i--) {
		newStr+=str;
	}
	return newStr;
	
}

console.log(repeatStringNumTimes("abc", 3));