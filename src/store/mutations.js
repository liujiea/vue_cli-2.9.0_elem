/*
* @Author: liujie
* @Date:   2018-05-23 09:08:39
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-23 17:25:56
*/

import {
    GET_USERINFO
} from './mutation-types.js'

export default {
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

