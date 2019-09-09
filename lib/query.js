/**
   * 获取Url的get参数
   * @param url 
   * @return Object
   */
export const getQuery = url => {
  let theRequest = {};
  if (url.indexOf("?") != -1) {
    let str = url.split('?')[1];
    let strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].split("=")[0] && unescape(strs[i].split("=")[1])) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
  }
  return theRequest;
}

/**
  * 获取链接某个参数
  * @param url 链接地址
  * @param name 参数名称
  */
export const getUrlParam = (url, name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
  var r = url.split('?')[1].match(reg);  //匹配目标参数  
  if (r != null) return unescape(r[2]); return null; //返回参数值  
}