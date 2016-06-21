//查找数组集合里每一个数组的最大值组成的数组
/*2016-6-19 By沐浴星光*/

Array.prototype.myMap = function (fn) {//ES5之前不支持数组迭代方法，自定义一个迭代方法
  var ary = [];
  if (Array.prototype.map) {//如果有原生迭代map方法就直接调用
    ary = this.map(fn);
  } else {
    for (var i = 0; i < this.length; i++) {
      ary[i] = fn.apply(null, [this[i], i, this]);
    }
  }
  return ary;
}


function largestOfFour(arr) {
  var largestArr=arr.myMap(function(item,index,arr){
  	return Math.max.apply(null,item);
  });
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);