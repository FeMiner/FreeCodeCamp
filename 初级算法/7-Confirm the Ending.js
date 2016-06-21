//确认字符串以特定子串结尾
/*2016-6-19By沐浴星光*/
function confirmEnding(str, target) {
  var targetLength=target.length;
  var strLength=str.length;
  var substr=str.substr(strLength-targetLength,targetLength);
  return substr===target;
}

confirmEnding("Bastian", "n");