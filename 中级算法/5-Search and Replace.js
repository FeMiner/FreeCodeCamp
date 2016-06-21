//查找和替换
function myReplace(str, before, after) {
	if (before.charCodeAt(0)<=90) {//如果首字母是大写的
		after=after.charAt(0).toUpperCase()+after.substring(1);
	} 
  return str.replace(before,after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));