//同一个字母不相邻的排列组合

/*先组合出所有的情况，再使用正则表达式过滤掉不符合的情况*/

function permAlone(str) {


	var regex = /(.)\1+/g;

	var permutate=function(str) {

		var result=[];
		if(str.length==1){
			return [str];  	
		}else{
			
				var preResult=permutate(str.slice(1));
				for (var j = 0; j < preResult.length; j++) {
					for (var k = 0; k < preResult[j].length+1; k++) {
						var temp=preResult[j].slice(0,k)+str[0]+preResult[j].slice(k);					
						result.push(temp);

					}
				}

			return result;
		}  
	};

	var permutations= permutate(str);


	var filtered = permutations.filter(function(string) {
		return !string.match(regex);
	});


	return filtered.length;
}

console.log(permAlone('aab'));