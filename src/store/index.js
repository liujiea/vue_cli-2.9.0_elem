/*
* @Author: liujie
* @Date:   2018-05-23 09:05:36
* @Last Modified by:   liujie
* @Last Modified time: 2018-07-02 20:42:35
*/

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

console.log(actions)

const state = {
    latitude: '',       //当前位置维度
    longitude: '',      //当前位置经度
    userInfo: null,      //用户信息
    login: true,          //是否登录
    geohash: '31.22299,121.36025',//地址geohash值
    cartList: [],       //购物车列表
    shopDetail: null,    //购物车详情
    remarkText: null,    //可选备注内容
    inputText: '',      //输入备注内容
    invoice: false,        //开发票
    choosedAddress: null,   //选择地址
    addressIndex: null,  //地址编号
    newAddress: [],     //新地址
    searchAddress: null,   //搜索地址
    invoice: null,      //是否开发票
    removeAddress:[],//移除地址
    addAddress: null,   //新增
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})