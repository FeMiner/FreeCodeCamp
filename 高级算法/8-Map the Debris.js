//求轨道运行周期
/*2016-6-26 By沐浴星光*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

	for (var i = 0; i < arr.length; i++) {
		var orbitalPeriod=2*Math.PI*Math.pow(Math.pow(earthRadius+arr[i].avgAlt,3)/GM,0.5);
		delete arr[i].avgAlt;
		arr[i].orbitalPeriod=Math.round(orbitalPeriod);
	}
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);