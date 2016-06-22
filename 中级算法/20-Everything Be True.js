//检查一组对象集合中每个对象的某个属性是否为有效值
function truthCheck(collection, pre) {
  return collection.every(function(item,index,arr){
  	return Boolean(item[pre])!==false;
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
 {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");