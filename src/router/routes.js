/*
* @Author: liujie
* @Date:   2018-05-22 19:45:51
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-25 15:48:10
*/

import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city');
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite');
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/home'
            },
            // 主页
            {
                path: '/home',
                component: home
            },
            // 登录和注册
            {
                path: '/login',
                component: login
            },
            //修改密码
            {
                path: '/forget',
                component: forget
            },
            //城市
            {
                path: '/city/:cityid',
                component: city
            },
            {
                path: '/msite',
                component: msite
            }
        ]
    }
]