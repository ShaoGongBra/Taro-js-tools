# Taro js-tools
js工具库，支持日期函数、gps转换函数、表单验证函数、导航函数、字符串处理函数、全局变量、url参数、md5加密、base64加解密

# 使用方法
> npm install taro-js-tools    
> or    
> yarn add taro-js-tools    

# 日期函数
> import {     
>   dateToStr,    
>   dateDiff,    
>   dateAdd,    
>   isLeapYear,    
>   strToDate,    
>   strFormatToDate,    
>   dateToLong,    
>   longToDate,    
>   isDate,    
>   getMaxDay,    
>   maxDayOfDate,    
>   datePart    
> } from 'react-native-text-radius/date'    
# 路由
`
import nav from 'react-native-text-radius/nav'
nav('/pages/index/index')
`
# 表单验证
`
import verify from 'react-native-text-radius/verify'
verify({
  phone: 15587087521,
  tel: 75148120
},{
  phone:{
    emptyMsg: '请输入电话号码',
    errMsg: '不是正确的电话号码'
    reg: 'require|phone'
  }
})
`