//移除数组中的假值
/*2016-6-19 By沐浴星光*/
/*
console.log(new Boolean(false)==false);
console.log(new Boolean(null)==false);
console.log(new Boolean(0)==false);
console.log(new Boolean("")==false);
console.log(new Boolean(undefined)==false);
console.log(new Boolean(NaN)==false);
//以上表达式都返回true
*/
function bouncer(arr) {
	var newArr=arr.filter(function(item,index,arr){
		return new Boolean(item)!=false;
	});
	
	return newArr;
}

bouncer([7, "ate", "", false, 9]);


