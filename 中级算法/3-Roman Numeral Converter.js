//转换成罗马数字
/*方法一*/
function convertToRoman1(num) {
	var symbols=['I','V','X','L','C','D','M'];
	var roman="";
	var index=0;
	while(num>0){
		var temp=num%10;
		switch(temp){//注意后面case取值的顺序很巧妙，并且注意哪些该加break,哪些不该加
			case 3:
			{
				roman+=symbols[index];
				temp--;
			}
			case 2:
			{
				roman+=symbols[index];
				temp--;
			}
			case 1:
			{
				roman+=symbols[index];
				temp--;
				break;
			}
			case 4:
			{
				roman+=symbols[index+1];
				roman+=symbols[index];
				break;
			}
			case 8:
			{
				roman+=symbols[index];
				temp--;
			}
			case 7:
			{
				roman+=symbols[index];
				temp--;
			}
			case 6:
			{
				roman+=symbols[index];
				temp--;
			}
			case 5:
			{
				roman+=symbols[index+1];
				break;
			}
			case 9:
			{
				roman+=symbols[index+2];
				roman+=symbols[index];
				break;
			}
			default:
			{
				break;
			}

		}
		index+=2;
		num=Math.floor(num/10);
	}
	return roman.split("").reverse().join("");
}

/*方法二*/
function convertToRoman2(num) {
   var symbols=[["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
   [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
   ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
   ["", "M", "MM", "MMM", "", "", "", "", "", "", ""]];
   var roman=symbols[3][Math.floor(num/1000)]
   +symbols[2][Math.floor(num%1000/100)]
   +symbols[1][Math.floor(num%100/10)]
   +symbols[0][Math.floor(num%10)];
   return roman;
}


convertToRoman1(36);