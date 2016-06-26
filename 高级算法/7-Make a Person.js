//创建对象
/*2016-6-25 By沐浴星光*/
var Person = function(firstAndLast) {
	var fullName=firstAndLast;
	var object={};
	this.getFirstName=function(){
		return fullName.split(" ")[0];
	};
	this.getLastName=function(){
    	return fullName.split(" ")[1];
    };
    this.getFullName=function(){
    	return fullName;
    };
    this.setFirstName=function(first){
    	fullName=first+" "+fullName.split(" ")[1];
    	return;
    };
    this.setLastName=function(last){
    	fullName=fullName.split(" ")[0]+" "+last;
    	return;
    };
    this.setFullName=function(firstAndLast){
    	fullName=firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();