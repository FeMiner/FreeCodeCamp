//收银机找零(浮点数运算存在误差)
/*2016-6-23 By沐浴星光*/
function checkCashRegister(price, cash, cid) {
	var diff=cash-price;//找零的金额
	var change=[];//找零方案数组
	var sum=0;
	var currency=[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25],
	["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
	
	for (var i = currency.length-1; i>=0; i--) {
		var count=parseInt(diff/currency[i][1],10);//从最大额货币开始除
		if (count>0) {
			currency[i][1]=count*currency[i][1];//需要某个金额的货币的总数
			if (currency[i][1]<=cid[i][1]) {//如果需要的货币总额小于收银台余额
				
				cid[i][1]=cid[i][1]-currency[i][1];//收银台余额扣除相应的部分
				currency[i][1]=parseFloat(currency[i][1].toFixed(2));//注意结果要求保留两位小数
				change.push(currency[i]);//将这种某种货币的找零方式推入数组
				diff=(diff-currency[i][1]).toFixed(2);//剩余还要找给顾客的钱
			}
			if(currency[i][1]>cid[i][1]&&cid[i][1]>0){//如果需要的货币总额小于收银台余额
				
				currency[i][1]=parseFloat(cid[i][1].toFixed(2));//此时将这种货币的所有余额都用来找零
				change.push(currency[i]);
				diff=(diff-cid[i][1]).toFixed(2);
				cid[i][1]=0.00;
			}					
		}
	}

	for (var j = 0; j < cid.length; j++) {
		 sum+=cid[j][1];//统计收银台余额	
		}

	if (change.length===0 ||diff>0) {//如果未形成找零方案或者还有钱没有找给顾客
			return "Insufficient Funds";
	}else if (sum===0) {
		return "Closed";
	}else{
		return change;
	}
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
 ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);