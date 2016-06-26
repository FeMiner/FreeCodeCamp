//数组配对
/*2016-6-26 By沐浴星光*/
/*这一题题目要求好像有点问题
If multiple pairs are possible that have the same numeric elements but different indices,
 return the smallest sum of indices.但是后面的测试用例中pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
 按照上面的要求银应该返回4
*/
function pairwise(arr, arg) {
  var indices=[];
  if (arr.length===0) {
  	return 0;
  }
  for (var i = 0; i < arr.length-1; i++) {
  	for (var j = i+1; j < arr.length; j++) {
  		if (arr[i]+arr[j]==arg&&indices.indexOf(i)==-1&&indices.indexOf(j)==-1) {
  			indices.push(i,j);
  		}
  	}
  }



  var sum=indices.reduce(function(prev,cur,index,arr){
  	return prev+cur;
  });
   return sum;
}

pairwise([1,4,2,3,0,5], 7);