//二分查找


//快速排序
var quickSort=function(arr){
	if(arr.length<=1){
		return arr;
	}
	var pivotIndex=Math.floor((arr.length/2));
	var pivot=arr.splice(pivotIndex,1)[0];
	var left=[],right=[];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]<pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);		
		}
	}
	return quickSort(left).concat([pivot],quickSort(right));
}


var binarySearch=function(arr,item){
	arr=quickSort(arr);//先对序列排序
	var low=0,
	high=arr.length-1,
	mid;
	while(low<=high){
		mid=Math.floor((high+low)/2);
		if (arr[mid]<item) {
			low=mid+1;
		}else if (arr[mid]>item) {
			high=mid-1;
		}else{
			return mid;
		}
	}
	return -1;//没有找到就返回-1
};
var arr=[85,24,63,45,17,31,96,50,23];
console.log(binarySearch(arr,45));
