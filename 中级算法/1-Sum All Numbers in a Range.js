//累加一段范围内的数字
function sumAll(arr) {
  var max=Math.max.apply(null,arr);
  var min=Math.min.apply(null,arr);
  var newArr=[];
  var sum;
  for (var i = min; i <= max; i++) {
  	 newArr.push(i);

  }
   sum=newArr.reduce(function(prev,cur,index,array){
   		return prev+cur;
   });
   
   return sum;
}
console.log(sumAll([1, 4]));