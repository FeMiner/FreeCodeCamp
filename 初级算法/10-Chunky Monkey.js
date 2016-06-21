//数组分块
/*2016-6-19 By沐浴星光*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  var index=0;
  while(index<arr.length){
  	newArr.push(arr.slice(index,index+=size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));