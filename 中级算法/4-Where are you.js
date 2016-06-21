//从对象数组中查找拥有特殊键值的对象
function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr=collection.filter(function(obj){//过滤出符合条件的项
  	var keys=Object.keys(source);//提取所有要查找的键
  	var match=keys.every(function(item){//对于所有的键在collection的某一项是否都存在且值相等
  		return obj.hasOwnPropety(item)&&source[item]===obj[item]					
  	});

  	return match;
  });
 
  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
