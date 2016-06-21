//求所有斐波那契数列中奇数的和
function sumFibs(num) {
	var fib1=1,fib2=1;
	var sum=fib1+fib2;
	var next=fib1+fib2;
	while(next<=num){
		if(next%2==1){
			sum+=next;
		}
		fib1=fib2;
		fib2=next;
		next=fib1+fib2;
	}
	return sum;
}
sumFibs(4);