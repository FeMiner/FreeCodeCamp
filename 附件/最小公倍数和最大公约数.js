/*求最大公约数和最小公倍数*/

//递归法求最大公约数
function mcd1(m,n) {
	var min=Math.min(m,n),max=Math.max(m,n);
	if (max%min===0) {
		return  min;
	}else{
		return mcd1(min,max%min);
	}
}

//循环法求最大公约数
function mcd2(m,n) {
	var min=Math.min(m,n),max=Math.max(m,n);
	while(max%min!=0){
		var temp=max%min;
		max=min;
		min=temp;
	}
	return min;
}

//利用最大公约数求最小公倍数,a，b的最大公约数记为（a，b）,整数a，b的最小公倍数记为[a，b]
//(a,b)[a,b]=ab(a,b均为整数)则最小公倍数=两数的乘积/最大公约数
function scm1(m,n){
	return m*n/mcd1(m,n);
}

//循环法求最小公倍数
function scm2(m,n){
	var min=Math.min(m,n),max=Math.max(m,n);
	var i=1;
	while(i<=max){
		var temp=min*i;
		if(temp%max===0){
			return temp;
		}
		i++;
	}
}

