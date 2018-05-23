/*
* @Author: liujie
* @Date:   2018-05-23 09:27:03
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-23 13:40:25
*/

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl;

if(process.env.NODE_ENV == 'development') {
    baseUrl = "http://cangdu.org:8001"
    imgBaseUrl = 'http://cangdu.org:8001/img/'
} else if (process.env.NODE_ENV == 'production') {
    imgBaseUrl = 'http://cangdu.org:8001/img/'
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl
}