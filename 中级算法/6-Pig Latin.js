//儿童黑话
/*辅音是单词中第一个元音字母前面所有的字母构成*/

function translatePigLatin(str) {
  var pattern=/^[^aeiou]+/;//正则表达式匹配开头
  if (pattern.test(str)) {
  	 str+=(RegExp.lastMatch+"ay");
  	 str=str.slice(RegExp.lastMatch.length);
  }else{
  	str+="way";
  }
  return str;
}

console.log(translatePigLatin("consonant"));