/**
 * 日期对象转换为指定格式的字符串
 * @param formatStr 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss
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
const dateToStr = (formatStr, date) => {
  formatStr = formatStr || "yyyy-MM-dd HH:mm:ss";
  date = date || new Date();
  //传入数字自动计算
  if (typeof date !== 'object') {
    date = String(date);
    const len = date.length;
    if (len == 10) {
      date += '000';
      date = new Date(date * 1);
    } else if (len == 13) {
      date = new Date(date * 1);
    } else {
      date = new Date();
    }
  }
  let str = formatStr;
  let Week = ['日', '一', '二', '三', '四', '五', '六'];
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
const dateDiff = (strInterval, dtStart, dtEnd) => {
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
const dateAdd = (strInterval, num, date) => {
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

/**
	 * 判断闰年
	 * @param date Date日期对象或者时间字符串
	 * @return boolean true 或false
	 */
const isLeapYear = date => {
  date = date || new Date();
  if (typeof date !== 'object') {
    date = strToDate(date);
  }
  return (0 == date.getYear() % 4 && ((date.getYear() % 100 != 0) || (date.getYear() % 400 == 0)));
}

/**
	* 字符串转换为日期对象
	* @param date Date 格式为yyyy-MM-dd HH:mm:ss，必须按年月日时分秒的顺序，中间分隔符不限制
	*/
const strToDate = dateStr => {
  let reCat = /(\d{1,4})/gm;
  let t = dateStr.match(reCat);
  if (!!t[1]) {
    t[1] = t[1] - 1;
  }
  return new Date(t.join(','));
}

/**
	* 把指定格式的字符串转换为日期对象yyyy-MM-dd HH:mm:ss
	* 
	*/
const strFormatToDate = (formatStr, dateStr) => {
  let year = 0;
  let start = -1;
  const len = dateStr.length;
  if ((start = formatStr.indexOf('yyyy')) > -1 && start < len) {
    year = dateStr.substr(start, 4);
  }
  let month = 0;
  if ((start = formatStr.indexOf('MM')) > -1 && start < len) {
    month = parseInt(dateStr.substr(start, 2)) - 1;
  }
  let day = 0;
  if ((start = formatStr.indexOf('dd')) > -1 && start < len) {
    day = parseInt(dateStr.substr(start, 2));
  }
  let hour = 0;
  if (((start = formatStr.indexOf('HH')) > -1 || (start = formatStr.indexOf('hh')) > 1) && start < len) {
    hour = parseInt(dateStr.substr(start, 2));
  }
  let minute = 0;
  if ((start = formatStr.indexOf('mm')) > -1 && start < len) {
    minute = dateStr.substr(start, 2);
  }
  let second = 0;
  if ((start = formatStr.indexOf('ss')) > -1 && start < len) {
    second = dateStr.substr(start, 2);
  }
  return new Date(year, month, day, hour, minute, second);
}

/**
	* 日期对象转换为毫秒数
	*/
const dateToLong = date => {
  return date.getTime();
}

/**
	* 毫秒转换为日期对象
	* @param dateVal number 日期的毫秒数 
	*/
const longToDate = dateVal => {
  return new Date(dateVal);
}

const isNumber = str => {
  let regExp = /^\d+$/g;
  return regExp.test(str);
}

/**
	* 判断字符串是否为日期格式
	* @param str string 字符串
	* @param formatStr string 日期格式， 如下 yyyy-MM-dd
	*/
const isDate = (str, formatStr) => {
  if (formatStr == null) {
    formatStr = "yyyyMMdd";
  }
  const yIndex = formatStr.indexOf("yyyy");
  if (yIndex == -1) {
    return false;
  }
  const year = str.substring(yIndex, yIndex + 4);
  const mIndex = formatStr.indexOf("MM");
  if (mIndex == -1) {
    return false;
  }
  const month = str.substring(mIndex, mIndex + 2);
  const dIndex = formatStr.indexOf("dd");
  if (dIndex == -1) {
    return false;
  }
  const day = str.substring(dIndex, dIndex + 2);
  if (!isNumber(year) || year > "2100" || year < "1900") {
    return false;
  }
  if (!isNumber(month) || month > "12" || month < "01") {
    return false;
  }
  if (day > getMaxDay(year, month) + "" || day < "01") {
    return false;
  }
  return true;
}

/**
 * 判断月份的最大天数
 * @param year
 * @param month
 * @return Number
 */
const getMaxDay = (year, month) => {
  if (month == 4 || month == 6 || month == 9 || month == 11)
    return 30;
  if (month == 2)
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
      return 29;
    else
      return 28;
  return 31;
}

/**
 * 取得当前日期所在月的最大天数
 * @param date
 * @return Number
 */
const maxDayOfDate = date => {
  date = date || new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  const time = date.getTime() - 24 * 60 * 60 * 1000;
  const newDate = new Date(time);
  return newDate.getDate();
}

/**
	* 取得日期数据信息  
	* 参数 interval 表示数据类型  
	* y 年 M月 d日 w星期 ww周 h时 n分 s秒  
	*/
const datePart = (interval, myDate) => {
  myDate = myDate || new Date();
  let partStr = '';
  const Week = ['日', '一', '二', '三', '四', '五', '六'];
  switch (interval) {
    case 'y': partStr = myDate.getFullYear(); break;
    case 'M': partStr = myDate.getMonth() + 1; break;
    case 'd': partStr = myDate.getDate(); break;
    case 'w': partStr = Week[myDate.getDay()]; break;
    case 'ww': partStr = myDate.WeekNumOfYear(); break;
    case 'h': partStr = myDate.getHours(); break;
    case 'm': partStr = myDate.getMinutes(); break;
    case 's': partStr = myDate.getSeconds(); break;
  }
  return partStr;
}

export {
  dateToStr,
  dateDiff,
  dateAdd,
  isLeapYear,
  strToDate,
  strFormatToDate,
  dateToLong,
  longToDate,
  isDate,
  getMaxDay,
  maxDayOfDate,
  datePart
}