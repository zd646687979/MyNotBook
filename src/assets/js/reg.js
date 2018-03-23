
//正则封装
//参数：
//正则类型（如：邮箱，手机号，身份证号等等）
//要验证的字符串
//返回值：true：验证通过；false：验证不通过；
function $1(id){
  return document.getElementById(id);
}

function checkAll(type,str){
  switch(type){
    case "userId": var reg = /^[a-zA-Z_]\w{5,14}$/;break;
    case "password": var reg = /^([A-Z]|[a-z]|[0-9]){6,20}$/;break;
    default:;
}
if(reg){
  return reg.test(str);
}else{
  return false;
}
}


//带有界面元素，并且不正确时显示 ×；正确时显示 √
//参数：
//正则类型（如：邮箱，手机号，身份证号等等）
//要验证的字符串
//显示×或者√的元素；（即提示信息显示在哪个元素上）
//返回值：无

function checkAllandUI(type,str,domObj){
  if(checkAll(type,str)){
    domObj.style.color = "green";
    domObj.innerHTML = "√";
  }else{
    domObj.style.color = "red";
    domObj.innerHTML = "输入有误";
  }
}
