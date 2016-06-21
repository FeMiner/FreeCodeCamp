//转变
/*2016-6-19 By沐浴星光*/
function mutation(arr) {
	var first=arr[0].toLowerCase();
	var second=arr[1].toLowerCase();
  for (var i = 0; i < second.length; i++) {
  	if(first.indexOf(second[i])===-1)
  		return false;
  }
  return true;
}

mutation(["hello", "hey"]);