import { dateAdd, dateDiff, dateToStr} from './date'
import { gcjEncrypt, gcjDecrypt, gcjDecryptExact, bdEncrypt, bdDecrypt, distance} from './gps'
import verify from './verify'
import { get as getGlobalData, set as setGlobalData } from './global-data'
import nav from './nav'
import { randomString, phoneHiding } from './string'

export {
  dateAdd,
  dateDiff,
  dateToStr,

  gcjEncrypt,
  gcjDecrypt,
  gcjDecryptExact,
  bdEncrypt,
  bdDecrypt,
  distance,

  verify,

  getGlobalData,
  setGlobalData,

  nav,

  randomString,
  phoneHiding
}