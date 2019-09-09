/**
 * 生成指定长度的随机字符串
 * @param {Number} len 要生成的字符串长度
 */
export const randomString = len => {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 隐藏电话号码中间的4位数字
 * @param {Number|String} tel 11位长度的电话号码
 */
export const phoneHiding = tel => {
  tel = String(tel)
  tel = tel.split('')
  for (let i = 3; i < 7; i++) {
    tel[i] = '*'
  }
  return tel.join('')
}