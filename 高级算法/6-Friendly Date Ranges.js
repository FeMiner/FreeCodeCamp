 //日期格式化成风格友好格式
 ///*2016-6-23 By沐浴星光*/ 
function makeFriendlyDates(arr) {
	var result=[];
	var Months=['January','February','March','April','May','June','July','August','September','October','November','December'];
	var Days=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th',
	'10th','11th','12th','13th','14th','15th','16th','17th','18th','19th',
	'20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th',
	'31st'];	
	var start=arr[0].split("-");
	var end=arr[1].split("-");
	var startYear=parseInt(start[0],10), startMonth=parseInt(start[1],10),startDay=parseInt(start[2],10);
	var endYear=parseInt(end[0],10), endMonth=parseInt(end[1],10),endDay=parseInt(end[2],10);
	var diffYear=endYear-startYear;
	var friendlyStart='',friendlyEnd='';
	var currentYear=new Date().getFullYear();
	if ((diffYear==1&&startMonth<endMonth)||(diffYear==1&&startMonth==endMonth&&startDay<=endDay)||diffYear>1) {
  		//如果起止时间超过一年,所有的信息都要显示
  		friendlyStart=Months[startMonth-1]+" "+Days[startDay-1]+", "+startYear;
  		friendlyEnd=Months[endMonth-1]+" "+Days[endDay-1]+', '+endYear;
  	}else{//如果时间没超过一年
  			
  			friendlyStart=Months[startMonth-1]+" "+Days[startDay-1];
  			if (startYear!=currentYear) {//如果起始时间不是今年
  				friendlyStart=friendlyStart+", "+startYear;
  			}
  			if (startYear==endYear&&startMonth==endMonth) {//如果起止年份和月份相同
  				if (startDay!=endDay) {//如果起止日期不是同一天
  					friendlyEnd=Days[endDay-1];
  				}
  			}else{//如果起止月份不同 				
  				friendlyEnd=Months[endMonth-1]+" "+Days[endDay-1];
  			}		
  	}
  	result.push(friendlyStart);
  	if (friendlyEnd!=='') {
  		result.push(friendlyEnd);
  	}
  	return result;
  }

  console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"]));