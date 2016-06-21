//查找丢失的字母

function fearNotLetter(str) {
  var missing;
  for (var i = 0; i < str.length-1; i++) {
  	if (str.charCodeAt(i+1)==parseInt(str.charCodeAt(i),10)+1) {
  		continue;
  	}else{
  		missing="";
  		missing+=String.fromCharCode(parseInt(str.charCodeAt(i),10)+1);
  	}
  }
  return missing;
}

fearNotLetter("abce");