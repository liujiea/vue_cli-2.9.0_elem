/*
* @Author: liujie
* @Date:   2018-05-22 19:45:51
* @Last Modified by:   liujie
* @Last Modified time: 2018-06-12 10:03:28
*/

import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city');
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite');
//食品
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food');
//商铺
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop');
//食品详情
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail');
//商店详情
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail');
//商店安全
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
//结算
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
//选择收货地址
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
//新增收货地址
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
//搜索地址
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress');
//备注
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark');
//发票
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice');
//支付
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment');
//订单
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
//搜索栏
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
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
            //食品
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
            },
            {
                path: '/confirmOrder',
                component: confirmOrder,
                children: [
                    {
                        path: 'chooseAddress',
                        component: chooseAddress,
                        children: [
                            {
                                path: 'addAddress',
                                component: addAddress,
                                children: [
                                    {
                                        path: 'searchAddress',
                                        component: searchAddress
                                    }
                                ]
                            }
                        ]
                    },
                    //备注
                    {
                        path: 'remark',
                        component: remark
                    },
                    //发票
                    {
                        path: 'invoice',
                        component: invoice
                    },
                    //支付
                    {
                        path: 'payment',
                        component: payment
                    }
                ]
            },
            //订单页
            {
                path: '/order',
                component: order
            },
            // 搜索页
            {
                path: '/search/:geohash',
                component: search
            }
        ]
    }
]