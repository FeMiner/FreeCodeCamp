//方法一
var quickSort=function(arr){
	if(arr.length<=1){
		return arr;
	}
	var pivotIndex=~~(arr.length/2);
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

var arr=[85,24,63,45,17,31,96,50];
console.log(quickSort(arr));


//方法二
var quickSort=function (arr) {
	quick(arr,0,arr.length-1);
	return arr;
}

var quick=function(arr,left,right){
	var index;
	if (arr.length>1) {
		index=partition(arr,left,right);//返回枢轴所在位置
		if (left<index-1) {
			quick(arr,left,index-1);
		}
		if (index<right) {
			quick(arr,index,right);
		}
	}
}
var partition=function(arr,left,right){
	var pivot=arr[Math.floor((right+left)/2)],
	i=left,j=right;
	while(i<j){
		while(arr[i]<pivot){
			i++;
		}
		while(arr[j]>pivot){
			j--;
		}
		if(i<=j){
			swapQuickSort(arr,i,j);
			i++;j--;
		}
	}
	return i;
}

var swapQuickSort=function(array,index1,index2){
	var temp=array[index1];
	array[index1]=array[index2];
	array[index2]=temp;
};
