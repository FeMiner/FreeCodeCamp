//定位数据插入的位置
/*2016-6-19 By沐浴星光*/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index=0;
  arr.sort(function(value1,value2){
  	return value1-value2;
  });
  console.log(arr);
  while(num>arr[index++]){
  }
  return index-1;
}

getIndexToIns([40, 60], 50);
