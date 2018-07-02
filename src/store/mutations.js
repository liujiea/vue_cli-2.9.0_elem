/*
* @Author: liujie
* @Date:   2018-05-23 09:08:39
* @Last Modified by:   liujie
* @Last Modified time: 2018-07-02 21:09:23
*/

import {
    GET_USERINFO,
    RECORD_USERINFO,
    RECORD_ADDRESS,
    SAVE_GEOHASH,
    ADD_CART,
    RECORD_CART,
    REDUCE_CART,
    INIT_BUYCART,
    CLEAR_CART,
    RECORD_SHOPDETAIL,
    CHOOSE_ADDRESS,
    CONFIRM_ADDRESS,
    CHOOSE_SEARCH_ADDRESS,
    NEED_VALIDATION,
    SAVE_CART_ID_SIG,
    SAVE_ORDER_PARAM,
    ORDER_SUCCESS,
    SAVE_SHOPID,
    CONFIRM_REMARK,
    CONFIRM_INVOICE,
    RETSET_NAME,
    ADD_ADDRESS,
    SAVE_ADDRESS,
    SAVE_ADDDETAIL
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'
export default {
    //记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true;
        setStore('user_id', info.user_id)
    },
    //获取用户信息
    [GET_USERINFO](state, info) {
        //如果state中userInfo， 而且原来的值不等于info 的值
        if(state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        };

        if (!state.login) {
            return;
        }

        if (!info.message) {
            state.userInfo = {...info}
        } else {
            state.userInfo = null;
        }
    },
    //记录当前经纬度
    [RECORD_ADDRESS](state, {
        latitude,
        longitude
    }) {
        state.latitude = latitude;
        state.longitude = longitude;
    },
    //保存当前经纬度
    [SAVE_GEOHASH](state, geohash) {
        state.geohash = geohash;
    },
    //选择当前地址
    [CHOOSE_SEARCH_ADDRESS](state, place) {
        state.searchAddress = place;
    },
    //加入购物车
    [ADD_CART] (state, {
        shopid,
        category_id,
        item_id,
        food_id,
        name,
        price,
        specs,
        packing_fee,
        sku_id,
        stock
    }) {
        let cart = state.cartList;
        let shop = cart[shopid] = (cart[shopid] || {});
        let category = shop[category_id] = (shop[category_id] || {});
        let item = category[item_id] = (category[item_id] || {});
        if (item[food_id]) {
            item[food_id]['num']++;
        } else {
            item[food_id] = {
                "num": 1,
                "id": food_id,
                "name": name,
                "price": price,
                "specs": specs,
                "packing_fee": packing_fee,
                "sku_id": sku_id,
                "stock": stock
            }
        };
        state.cartList = {...cart};
        //存入localStorage
        setStore('buyCart', state.cartList);
    },
    //移出购物车
    [REDUCE_CART](state, {
        shopid,
        category_id,
        item_id,
        food_id,
        name,
        price,
        specs
    }) {
        let cart = state.cartList;
        let shop = (cart[shopid] || {});
        let category = (shop[category_id] || {});
        let item = (category[item_id] || {});
        if (item && item[food_id]) {
            if (item[food_id]['num'] > 0) {
                item[food_id]['num']--;
                state.cartList = {...cart};
                //存入localStorage
                setStore('buyCart', state.cartList);
            } else {
                //商品数量为0， 则清空当前商品的信息
                item[food_id] = null;
            }
        }
    },
    //页面初始化时从本地缓存获取购物车数据
    [INIT_BUYCART](state) {
        let initCart = getStore('buyCart');
        if (initCart) {
            state.cartList = JSON.parse(initCart);
        }
    },
    //清空当前商品的购物车信息
    [CLEAR_CART](state, shopid) {
        state.cartList[shopid] = null;
        state.cartList = {...state.cartList};
        setStore('buyCart', state.cartList);
    },
    //记录商品详情
    [RECORD_SHOPDETAIL](state, detail) {
        state.shopDetail = detail;
    },
    //选择的地址
    [CHOOSE_ADDRESS](state, {
        address,
        index
    }) {
        state.choosedAddress = address;
        state.addressIndex = index;
        console.log(state.addressIndex)
    },
    //保存地址
    [CONFIRM_ADDRESS](state, newAddress) {
        state.newAddress.push(newAddress);
    },
    //保存下单需要验证的返回值
    [NEED_VALIDATION](state, needValidation) {
        state.needValidation = needValidation;
    },
    //保存下单后购物id和sig
    [SAVE_CART_ID_SIG](state, {
        cart_id,
        sig
    }) {
        state.cart_id = cart_id;
        state.sig = sig;
    },
    //保存下单参数， 用户验证页面调用
    [SAVE_ORDER_PARAM](state, orderParam) {
        state.orderParam = orderParam;
    },
    // //修改下单参数
    // [CHANGE_ORDER_PARAM](state, newParam) {
    //     state.orderParam = Object.assign({}, state.orderParam, newParam);
    // },
    //下单成功， 保存订单返回信息
    [ORDER_SUCCESS](state, order) {
        state.cartPrice = null;
        state.orderMessage = order;
    },
    //保存商铺id
    [SAVE_SHOPID](state, shopid) {
        state.shopid = shopid;
    },
    [CONFIRM_REMARK](state, {
        remarkText,
        inputText
    }){
        state.remarkText = remarkText;
        state.inputText = inputText;
    },
    //是否开发票
    [CONFIRM_INVOICE](state, invoice) {
        console.log(invoice)
        state.invoice = invoice;
    },
    //修改名字
    [RETSET_NAME](state, username) {
        state.userInfo = Object.assign({}, state.userInfo,{username})
    },
    //删除地址列表
    [SAVE_ADDRESS](state, newAddress) {
        state.removeAddress = newAddress;
    },
    //保存新增地址
    [SAVE_ADDDETAIL](state, addAddress) {
        state.addAddress = addAddress;
    },
    //新增地址
    [ADD_ADDRESS](state, obj) {
        state.removeAddress = [obj, ...state.removeAddress];
    }
}

