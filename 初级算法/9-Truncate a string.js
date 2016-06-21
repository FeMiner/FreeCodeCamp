//截断字符串
/*2016-6-19 By沐浴星光*/

function truncateString(str, num) {

	if(str.length<=num){
		return str;
	}
	else{
		return (num<=3)?(str.slice(0,num)+"..."):(str.slice(0,num-3)+"...");
	}

}
truncateString("A-tisket a-tasket A green and yellow basket", 11);