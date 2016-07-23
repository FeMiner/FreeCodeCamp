var bubbleSort=function (arr) {
	var length=arr.length;
	for (var i = 0; i < length; i++) {
		/*因为每冒泡一次就会将本次最大值放在最后，所以后面的就不需要再比较了，
		所以可以从内循环减去外循环已经跑过的轮数*/
		for (var j = 0; j <length-1-i; j++) {
			if (arr[j]>arr[j+1]) {
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
		
	}
	return arr;
}
var arr=[85,24,63,45,17,31,96,50];
console.log(bubbleSort(arr));

