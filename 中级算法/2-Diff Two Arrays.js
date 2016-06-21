// 合并两个数组的不重复元素组成新的数组
function diffArray(arr1, arr2) {

	var diff1=arr1.filter(function(item,index,arr){
		return arr2.indexOf(item)==-1;
	});
	var diff2=arr2.filter(function(item,index,arr){
		return arr1.indexOf(item)==-1;
	});
	return diff1.concat(diff2);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);