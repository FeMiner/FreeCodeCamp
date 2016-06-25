
//求给定数组元素的全排列
// function permutate(arr) {

//     var result=[];
//     if(arr.length==1){
//     	return [arr]  	
//     }else{
    
//     		var preResult=permutate(arr.slice(1));
//     		for (var j = 0; j < preResult.length; j++) {
//     			for (var k = 0; k < preResult[j].length+1; k++) {
//     				var temp=preResult[j].slice();
//     				temp.splice(k,0,arr[0]); 				
//     				result.push(temp);    			
//     			}
//     		}
    		
//     	return result;

//     }  
// }

// console.log(permutate(['a','b','c']));


//求给定字符串字符的全排列
function permutate(str) {

    var result=[];
    if(str.length==1){
    	return [str]  	
    }else{   
    		var preResult=permutate(str.slice(1));
    		console.log(preResult);
    		for (var j = 0; j < preResult.length; j++) {
    			for (var k = 0; k < preResult[j].length+1; k++) {
    				var temp=preResult[j].slice(0,k)+str[0]+preResult[j].slice(k);				
    				result.push(temp);   			
    			}
    		}
    	return result;

    }  
}

console.log(permutate("abc"));


//求给定数组元素的全排列 
function permutate(input) {
  var permArr = [],
  usedChars = [];
  function main(input){
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr
  }
  return main(input);
};
console.log(permutate(['a','b','c']));