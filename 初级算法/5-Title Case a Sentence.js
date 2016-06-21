//句子单词首字母大写化
/*2016-6-18 By沐浴星光*/

Array.prototype.myMap = function (fn) {//ES5之前不支持数组迭代方法，自定义一个迭代方法
  var ary = [];
  if (Array.prototype.map) {//如果有原生迭代map方法就直接调用
    ary = this.map(fn);
  } else {
    for (var i = 0; i < this.length; i++) {
      ary[i] = fn.apply(null, [this[i], i, this]);
    }
  }
  return ary;
}

function titleCase(str) {
    var newStr=str.toLowerCase();//将句子转化成小写
    var wordArr=newStr.split(" ");//将句子分割成数组
    var newWorldArr=wordArr.map(function(item,index,arr){
    	return item.charAt(0).toUpperCase()+item.substring(1);//新的数组项由每一项的第一个字母大写+后面的字符拼接而成
    });
return newWorldArr.join(" ");
}

titleCase("I'm a little tea pot");