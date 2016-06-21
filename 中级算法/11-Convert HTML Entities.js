//方法一
// function convertHTML(str) {
//   // &colon;&rpar;
//   var pattern=/[&<>"']/g;
//   rules={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};


//  return str.replace(pattern,function(match){
//   	return	rules[match];
//   });
// }
// console.log(convertHTML("<Tom & Jerry>"));

//方法二
function convertHTML(str) {
  // &colon;&rpar;
  var pattern=/[&<>"']/g;
  return str.replace(pattern,function(match){
  	switch(match){
  		case "<":
  		return "&lt;";
  		case ">":
  		return "&gt;";
  		case "&":
  		return "&amp;";
  		case "\"":
  		return "&quot;";
  		case "\'":
  		return "&apos;"; 
  	}
  });
}
console.log(convertHTML("<Tom & Jerry>"));
