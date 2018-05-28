/*
* @Author: liujie
* @Date:   2018-05-23 09:24:41
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-28 10:38:18
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
 * 获取msite页面地址信息
 */
export const msiteAddress = geohash => fetch('/v2/pois/' + geohash);

/**
 * 获取food页面的category种类类型
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category', {
    latitude,
    longitude
});


/**
 * 获取food页面的配送方
 */

export const foodDelivery = (latitude, longitude) => fetch('/shopping/v1/restaurants/delivery_modes', {
    latitude,
    longitude,
    kw: ''
});

/**
 * 获取food页面的商家属性活动列表
 */

export const foodActivity = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
    latitude,
    longitude,
    kw: ''
})
/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
    geohash,
    group_type: '1',
    'flags[]': 'F'
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

// 获取msite商铺列表

export const shopList = (latitude, longitude, offset, restaurant_category_id="", restaurant_category_ids = "", order_by = "", delivery_mode = "", support_ids = []) => {
    let supportStr = "";
    support_ids.forEach(item => {
        if (item.status) {
            supportStr += '&support_ids[]=' + item.id;
        }
    });
    let data = {
        latitude,
        longitude,
        offset,
        limit: '20',
        'extras[]': 'activities',
        keyword: '',
        restaurant_category_id,
        'restaurant_category_id[]': restaurant_category_ids,
        order_by,
        'delivery_mode[]': delivery_mode + supportStr
    };
    return fetch('/shopping/restaurants', data);
}

//密码登录
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', { username, password, captcha_code }, 'POST')

//改密码
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');
