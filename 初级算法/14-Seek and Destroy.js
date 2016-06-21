//查找并删除数组中特定值
/*2016-6-19 By沐浴星光*/
function destroyer(arr) {
	var arg=Array.prototype.slice.call(arguments,1);
	var newArr=arr.filter(function(item,index,arr){
		return arg.indexOf(item)==-1;
	});
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);