//计算素数之和
function sumPrimes(num) {
	
	var sum=0;
    var isPrime=function(n){//判断一个数是否是质数
    	if (n===2) {
    		return true;
    	}else{
    		//实际上不用检查n开二次方根以上的数,试想一下，
    		//如果有一个大于根号n的整数p能被n整除，则结果q必然小于根号n,
    		//那么n也能被q整除，结果是p,因为q<p,所以在下面的循环中i=q会先不符合要求返回false,后面也就不用检查了
    		for (var i = 2; i*i <= n; i++) {
    			if (n%i===0) {
    				return false;
    			}
    		}
    	}
    	return true;
    };

    for (var j = 2; j <=num; j++) {
    	if (isPrime(j)) {
    		sum+=j;
    	}
    }
    return sum;
}

sumPrimes(10);