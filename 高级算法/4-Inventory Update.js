//管理库存
/*2016-6-23 By沐浴星光*/
function updateInventory(arr1, arr2) {

    var remain=[];
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
           if (arr1[j][1]==arr2[i][1]) {//如果在arr1找到了相同项目，则直接增加数量
            arr1[j][0]+=arr2[i][0];
            break;
            }                     
        }
        if (j==arr1.length) {//如果j的值最终等于arr1的长度,说明内部循环并没有找到该项目
             remain.push(arr2[i]);//将新增的项目暂时存在remain数组中;
        }   
    }
 
    if (remain.length===0) {//如果没有新增项目
        return arr1;
    }else{
       arr1=arr1.concat(remain);//合并重排序
       arr1.sort(function(var1,var2){
            if(var1[1]>var2[1]){
                return 1;
            }else if (var1[1]<var2[1]) {
                return -1;
            }else{
                return 0;
            }
       });
       return arr1;
    }
   
}

// Example inventory lists
var curInv = [
[21, "Bowling Ball"],
[2, "Dirty Sock"],
[1, "Hair Pin"],
[5, "Microphone"]
];

var newInv = [
[2, "Hair Pin"],
[3, "Half-Eaten Apple"],
[67, "Bowling Ball"],
[7, "Toothpaste"]
];

updateInventory(curInv, newInv);