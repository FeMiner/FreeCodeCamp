//返回一组数组集合中的唯一项组成的新数组
function uniteUnique(arr) {
	var result=[];
	arg=Array.prototype.slice.call(arguments);
	result=arg.reduce(function(prev,cur,index,arg){
		for (var i = 0; i < cur.length; i++) {
			if (prev.indexOf(cur[i])==-1) {
				prev.push(cur[i]);
			}
		}
		return prev;
	});
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);