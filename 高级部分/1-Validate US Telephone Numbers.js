//验证北美电话号码的有效性

function telephoneCheck(str) { 
	var pattern=/^1?\s?(\()?\d{3}(\))?[\s-]?\d{3}[\s-]?\d{4}$/;
	//由于JavaScript不支持条件匹配，所以，上面的正则表达式无法剔除只有单括号的情况
	//，这里使用了一个很巧妙的方法，在两个括号处使用了两个子表达式，下面检测只有当这两个表达式
	//同时匹配到或者同时没匹配到时才返回true,这样就不会出现单括号的情况了

	if(pattern.test(str)){
		if(RegExp.$1&&RegExp.$2){

			return true;
		}else if(!RegExp.$1&&!RegExp.$2){
			return true;
		}
		else{

			return false;
		}

	}

	return false;

}


telephoneCheck("555-555-5555");