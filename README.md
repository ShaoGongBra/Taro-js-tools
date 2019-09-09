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
> import nav from 'react-native-text-radius/nav'    
> nav('/pages/index/index')
# 表单验证
> import verify from 'react-native-text-radius/verify'    
> verify({    
>   phone: 15587087521,    
>   tel: 75148120    
> },{    
>   phone:{    
>     emptyMsg: '请输入电话号码',    
>     errMsg: '不是正确的电话号码'    
>     reg: 'require|phone'    
>   }    
> })
# URL
> import { getQuery,getUrlParam } from 'react-native-text-radius/query'
# 全局变量
> import { set,get } from 'react-native-text-radius/global-data'
# GPS
> import { gcjEncrypt,gcjDecrypt,gcjDecryptExact,bdEncrypt,bdDecrypt,distance } from 'react-native-text-radius/gps'
# 字符串
> import { randomString,phoneHiding } from 'react-native-text-radius/string'   
> // 生成32位随机字符串 
> randomString(32)   
> // 隐藏电话号码中间4位   
> phoneHiding(18888888888)   
# MD5
> import md5 from 'react-native-text-radius/md5'   
# BASE64
> import {base64Encode,base64Decode} from 'react-native-text-radius/base64'   