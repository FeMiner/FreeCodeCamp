//求数组元素的最小公倍数
/*依次求出前两个数的最小公倍数，并将求出的最小公倍数放入数组，重复前面的过程*/
function smallestCommons(arr) {
    var max=Math.max.apply(null,arr),min=Math.min.apply(null,arr);
    var newArr=[];
    for (var i = min; i <=max; i++) {
    	newArr.push(i);
    }
    //循环法求最小公倍数
    var scm=function(m,n){
    	var min=Math.min(m,n),max=Math.max(m,n);
    	var i=1;
    	while(i<=max){
    		var temp=min*i;
    		if(temp%max===0){
    			return temp;
    		}
    		i++;
    	}
    };
    
    var scms=newArr.reduce(function(prev,cur,index,arr){
    	return scm(prev,cur);
    });
    return scms;
   
}


console.log(smallestCommons([1,5]));