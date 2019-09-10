/**
 * 表单验证类函数
 * @param data 对象 要验证的表单
 * @param verify 对象 Date日期对象或者时间戳或者带毫秒的时间戳, 如果缺省，则为当前时间
 *
 * verify = {
 *  field: {
 *    emptyMsg: '字段不能为空',
 *    errMsg: '不是正确的手机号码'
 *    reg: 'require|phone'
 *  }
 * }
 * @return Boolean
 */
export default (data, verify) => {
  for (let key in verify) {
    let regs = verify[key].reg.split("|")
    for (let i = 0, length = regs.length; i < length; i++) {
      switch (regs[i]) {
        case 'require':
          if (!data[key]) {
            Taro.showToast({
              title: verify[key].emptyMsg || key + '不能为空',
              icon: 'none'
            })
            return false
          }
          break
        case 'phone':
          if (!/^1\d{10}$/.test(data[key])) {
            Taro.showToast({
              title: verify[key].errMsg || key + '不是正确的手机号码',
              icon: 'none'
            })
            return false
          }
          break
        case 'tel':
          if (!/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(data[key])) {
            Taro.showToast({
              title: verify[key].errMsg || key + '不是正确的电话号码',
              icon: 'none'
            })
            return false
          }
          break
        case 'email':
          if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(data[key])) {
            Taro.showToast({
              title: verify[key].errMsg || key + '不是正确的邮箱地址',
              icon: 'none'
            })
            return false
          }
          break
        case 'money':
          if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(data[key])) {
            Taro.showToast({
              title: verify[key].errMsg || key + '不是正确的金钱数',
              icon: 'none'
            })
            return false
          }
          break
        default:
          break
      }
    }
  }
  return true
}