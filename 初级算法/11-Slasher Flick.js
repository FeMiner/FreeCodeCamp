//数组截头存尾
/*2016-6-19 By沐浴星光*/
function slasher(arr, howMany) {
  arr.splice(0,howMany);
  return arr;
}
slasher([1, 2, 3], 2);