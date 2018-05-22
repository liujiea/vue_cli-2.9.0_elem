/*
* @Author: liujie
* @Date:   2018-05-22 19:45:51
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-22 20:19:26
*/

import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../components/page/home/home')), 'home')

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                component: home
            }
        ]
    }
]