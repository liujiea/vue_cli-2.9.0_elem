/*
* @Author: liujie
* @Date:   2018-05-23 09:05:36
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-25 16:59:19
*/

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

console.log(actions)

const state = {
    userInfo: null,      //用户信息
    login: true,          //是否登录
    geohash: ''          //定位信息
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})