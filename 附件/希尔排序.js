var shellSort=function (arr) {
	var length=arr.length;
	var gap=Math.floor(length/2);
	while(gap>=1){
		for (var i = gap; i < length; i++) {
			var j=i;
			var temp=arr[i];
			/*对距离为gap的元素组内进行直接插入排序
			下面这段是不是似曾相识，和直接排序算法如出一辙。
			这不过直接排序算法的gap为1*/
			while(j >=0&&temp<arr[j-gap]) {
				arr[j]=arr[j-gap];//元素在本组内后移
				j-=gap;
			}
			arr[j]=temp;
		}

		gap=Math.floor(gap/2);
	}

	return arr;	

}

var arr=[85,24,63,45,17,31,96,50,23];
console.log(shellSort(arr));
