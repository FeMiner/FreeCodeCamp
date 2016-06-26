//数字阶乘
/*2016-6-19 By沐浴星光*/
function factorialize(num) {
	if (num<=1) {
		return 1;//0的阶乘为0,同时也是递归出口
	}
  return num*factorialize(num-1);//使用递归
}

factorialize(5);
