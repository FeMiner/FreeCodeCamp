//凯撒密码
/*2016-6-19 By沐浴星光*/
function rot13(str) { // LBH QVQ VG!
  var newStr;
  var charCodeArr=[];//存储所有转换后的字符编码
  var charCode;
  for (var i = 0; i < str.length; i++) {
  	charCode=str.charCodeAt(i);
  	if(charCode>=65&&charCode<=90){
      charCodeArr.push((charCode-13)>=65?(charCode-13):(90-65-13+charCode+1));//90-[13-(charCode-65)]+1
  	}else{
  		charCodeArr.push(charCode);
  	}
  }
  
  return String.fromCharCode.apply(null,charCodeArr);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");