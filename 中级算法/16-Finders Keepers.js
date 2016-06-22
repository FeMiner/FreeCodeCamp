//查找数组中符合条件的元素
function findElement(arr, func) {
  var num=arr.filter(function(item,index,arr){
  	return func(item);
  });
  return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });