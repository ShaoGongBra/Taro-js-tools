/**
 * 日期对象转换为指定格式的字符串
 * @param f 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss
 * @param date Date日期对象或者时间戳或者带毫秒的时间戳, 如果缺省，则为当前时间
 *
 * YYYY/yyyy/YY/yy 表示年份  
 * MM/M 月份  
 * W/w 星期  
 * dd/DD/d/D 日期  
 * hh/HH/h/H 时间  
 * mm/m 分钟  
 * ss/SS/s/S 秒  
 * @return string 指定格式的时间字符串
 */
export const dateToStr = (formatStr, date) => {
  formatStr = formatStr || "yyyy-MM-dd HH:mm:ss";
  date = date || new Date();
  //传入数字自动计算
  if(typeof date !== 'object'){
     date = String(date)
     const len = date.length
     if(len == 10){
        date+='000'
        date = new Date(date * 1)
     }else if(len == 10){
        date = new Date(date * 1)
     }else{
        date = new Date()
     }
  }
  var str = formatStr;
  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  str = str.replace(/yyyy|YYYY/, date.getFullYear());
  str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
  str = str.replace(/MM/, date.getMonth() > 8 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1));
  str = str.replace(/M/g, (date.getMonth() + 1));
  str = str.replace(/w|W/g, Week[date.getDay()]);

  str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
  str = str.replace(/d|D/g, date.getDate());

  str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
  str = str.replace(/h|H/g, date.getHours());
  str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
  str = str.replace(/m/g, date.getMinutes());

  str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
  str = str.replace(/s|S/g, date.getSeconds());

  return str;
}

/**
* 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串
* @param strInterval string  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒  
* @param dtStart Date  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒
* @param dtEnd Date  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒 
*/
export const dateDiff = (strInterval, dtStart, dtEnd) => {
  switch (strInterval) {
     case 's': return parseInt((dtEnd - dtStart) / 1000);
     case 'n': return parseInt((dtEnd - dtStart) / 60000);
     case 'h': return parseInt((dtEnd - dtStart) / 3600000);
     case 'd': return parseInt((dtEnd - dtStart) / 86400000);
     case 'w': return parseInt((dtEnd - dtStart) / (86400000 * 7));
     case 'm': return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
     case 'y': return dtEnd.getFullYear() - dtStart.getFullYear();
  }
}

/**
 * 日期计算  
 * @param strInterval string  可选值 y 年 m月 d日 w星期 ww周 h时 n分 s秒  
 * @param num int
 * @param date Date 日期对象
 * @return Date 返回日期对象
 */
export const dateAdd = (strInterval, num, date) => {
  date = date || new Date();
  switch (strInterval) {
     case 's': return new Date(date.getTime() + (1000 * num));
     case 'n': return new Date(date.getTime() + (60000 * num));
     case 'h': return new Date(date.getTime() + (3600000 * num));
     case 'd': return new Date(date.getTime() + (86400000 * num));
     case 'w': return new Date(date.getTime() + ((86400000 * 7) * num));
     case 'm': return new Date(date.getFullYear(), (date.getMonth()) + num, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
     case 'y': return new Date((date.getFullYear() + num), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
  }
}