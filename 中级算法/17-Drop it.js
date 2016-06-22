//从数组开头删除数组中不符合要求的元素直到遇到一个符合要求的元素，
//返回这个符合要求的元素及后面的所有元素组成的数组

function dropElements(arr, func) {
  // Drop them elements.
  while(func(arr[0])==false){
  	arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });