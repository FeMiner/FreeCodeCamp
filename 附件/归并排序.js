var mergeSort=function (arr) {
	if (arr.length<=1) {
		return arr;
	}
	var mid=Math.floor(arr.length/2),
	left=arr.slice(0,mid),
	right=arr.slice(mid,arr.length);
	return merge(mergeSort(left),mergeSort(right));
}
var merge=function(left,right){
	var result=[],i=0,j=0;
	while(i<left.length&&j<right.length){
		if (left[i]<right[j]) {
			result.push(left[i++]);
		}else{
			result.push(right[j++]);
		}
	}
	while(i<left.length){
		result.push(left[i++]);
	}
	while(j<right.length){
		result.push(right[j++]);
	}
	return result;
}

var arr=[85,24,63,45,17,31,96,50];
console.log(mergeSort(arr));
