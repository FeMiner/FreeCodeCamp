function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var pattern=/[A-Z\_]/g;
 return  str.replace(pattern,function(match){
  	if (match==="_") {//将所有的下划线替换成空格
  		return " ";
  	}else{
  		return	" "+match;//在所有大写字母前面添加空格
  	}
  }).trim().replace(/\s+/g,'-').toLowerCase();//去掉字符串首尾空格，将空格替换成“-”,并小写



}

spinalCase('This Is Spinal Tap');