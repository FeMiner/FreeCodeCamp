var insertionSort=function (arr) {
	var length=arr.length;
	for (var i = 1; i < length; i++) {
		var temp=arr[i];//待插入元素
		var j=i;
		while (j>0&&temp<arr[j-1]) {//从已有序的序列最后一个元素开始往前比较
			arr[j]=arr[j-1];//如果不符合插入要求，那么与之比较的元素就要后移
			j--;
		}
		arr[j]=temp;//插入元素到合适位置		
	}
	return arr;
}
var arr=[85,24,63,45,17,31,96,50];
console.log(insertionSort(arr));
