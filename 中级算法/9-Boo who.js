//判断一个值是否为布尔原始值

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(bool===false || bool===true){//使用恒等
  	return true;
  }else{
  	return false;
  }
}

booWho(null);