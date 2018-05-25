/*
* @Author: liujie
* @Date:   2018-05-23 09:24:41
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-25 13:13:30
*/

import fetch from '../config/fetch'
import { getStore } from '../config/mUtils'

/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});

//获取定位城市
export const cityGuess = () => fetch('/v1/cities', {
    type: 'guess'
})

//获取首页热门城市

export const hotcity = () => fetch('/v1/cities', {
    type: 'hot'
})

// 获取所有城市

export const groupcity = () => fetch('/v1/cities', {
    type: 'group'
})
/**
 * [获取当前城市信息]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const currentcity = number => fetch('/v1/cities/' + number)
/**
 * [当前城市的搜索值]
 * @param  {[type]} cityid [description]
 * @param  {[type]} value  [description]
 * @return {[type]}        [description]
 */
export const searchplace = (cityid, value) => fetch('/v1/pois', {
    type: 'search',
    city_id: cityid,
    keyword: value
})
/**
 * [手机号登录]
 * @param  {[type]} code           [description]
 * @param  {[type]} mobile         [description]
 * @param  {[type]} validate_token [description]
 * @return {[type]}                [description]
 */
export const sendLogin = (code, mobile, validate_token) => fetch('/v1/login/app_mobile', { code, mobile, validate_token }, "POST")

/**
 * 获取短信验证码
 */

export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
    mobile: phone,
    scene: 'login',
    type: 'sms'
}, "POST")

/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 检测账号是否存在
 */

export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
    [type]: checkNumber,
    type
})

/**
 * 发送账号
 */

export const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
    action: "send",
    captcha_code,
    [type]: sendData,
    type: 'sms',
    way: type,
    password
}, "POST")
//
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', { username, password, captcha_code }, 'POST')

//改密码
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');
