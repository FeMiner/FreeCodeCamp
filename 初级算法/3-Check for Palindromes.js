//回文字符串
function palindrome(str) {
  
  var newStr=str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();//将非数字字母替换掉
  return newStr.split("").reverse().join("")===newStr;//比较反转前后是否相等
}
palindrome("race car");
