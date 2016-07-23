var selectionSort=function (arr) {
	var length=arr.length;
	for (var i = 0; i < length; i++) {
		var min=i;//用一个变量存储最小值下标，初始值为仍未排序的第一个元素的下标
		for (var j = i+1; j <length; j++) {
			//与当前最小值比较，如果小于当前最小值，最小值下标就要移动了
			if (arr[j]<arr[min]) {
				min=j;
			}
		}
		if(min!=i){//如果最小值下标移动了，就交换元素
			var temp=arr[i];
			arr[i]=arr[min];
			arr[min]=temp;
		}
	}
	return arr;
}

var arr=[85,24,63,45,17,31,96,50];
console.log(selectionSort(arr));
