/*
* @Author: liujie
* @Date:   2018-05-22 19:45:51
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-30 16:16:30
*/

import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city');
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite');
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food');
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop');
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail');
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail');
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')

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
            },
            {
                path: '/food',
                component: food
            },
            //商品页
            {
                path: '/shop',
                component: shop,
                children: [
                    {
                        //食品详情页
                        path: 'foodDetail',
                        component: foodDetail
                    },
                    {
                        //商铺详情页
                        path: 'shopDetail',
                        component: shopDetail,
                        children: [
                            {
                                path: 'shopSafe',
                                component: shopSafe
                            }
                        ]
                    }
                ]
            }
        ]
    }
]