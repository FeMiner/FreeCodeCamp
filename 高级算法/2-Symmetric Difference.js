//求数组集对称差分数组
///*2016-6-22 By沐浴星光*/
function sym(args) {
	var arrays=Array.prototype.slice.call(arguments);

	//首先对数组进行去重
	for (var i = 0; i < arrays.length; i++) {		
		var temp=[];
		for (var j = 0; j < arrays[i].length; j++) {
			if (temp.indexOf(arrays[i][j])===-1) {
				temp.push(arrays[i][j])
			}
		}
		arrays[i]=temp;
	}

	return arrays.reduce(function(prev,cur,index,args){
		for (var i = 0; i < cur.length; i++) {
			var idx=prev.indexOf(cur[i]);
			if(idx===-1){
				prev.push(cur[i]);
			}else{
				prev.splice(idx,1);
			}	 
		}
		return prev; 
	});
	
}

sym([1,3],[3,4,5,5]);