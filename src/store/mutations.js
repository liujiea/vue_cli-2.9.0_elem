/*
* @Author: liujie
* @Date:   2018-05-23 09:08:39
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-24 17:24:26
*/

import {
    GET_USERINFO,
    RECORD_USERINFO
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
        console.log(info)
        //如果state中userInfo， 而且原来的值不等于info 的值
        if(state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        };

        if (!state.login) {
            return;
        }

        if (!info.message) {
            console.log(info)
            state.userInfo = {...info}
        } else {
            state.userInfo = null;
        }
    }
}

