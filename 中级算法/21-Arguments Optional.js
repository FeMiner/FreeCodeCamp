function addTogether() {
	var len=arguments.length;
	if(len===1&&typeof arguments[0]=="number"){
		var para1=arguments[0];
		return function(num){
			if (typeof num!=="number") {
				return undefined;
			}
			return num+para1;
		};
	}else if(len===2 && typeof arguments[0]=="number"&& typeof arguments[1]=="number"){
		return arguments[0]+arguments[1];
	}else{
		return undefined;
	}
}

console.log(addTogether(2));