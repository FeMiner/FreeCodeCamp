// 将多维数组展平为一位数组
// 下面的代码参考了undercscore库的源代码http://www.css88.com/doc/underscore/docs/underscore.html
function steamrollArray(arr) {
	var output=[],idx=0;
	for (var i = 0; i < arr.length; i++) {//遍历数组
		var item=arr[i];
		if(Array.isArray(item)){//如果数组元素还是元素就递归
			item=steamrollArray(item);	//递归过后的返回值还是数组
			var j=0,len=item.length;
			output.length+=len;
			while(j<len){//将结果填进output数组
				output[idx++]=item[j++];
			}
		}else{//如果数组元素不是数组，则直接填进结果数组
			output[idx++]=item;
		}
	}
		return output;
}


steamrollArray([[1], [2]]);