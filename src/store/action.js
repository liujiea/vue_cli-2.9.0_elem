/*
* @Author: liujie
* @Date:   2018-05-23 09:08:56
* @Last Modified by:   liujie
* @Last Modified time: 2018-06-26 13:47:49
*/

import {
    getUser,
    getAddressList
} from '../service/getData'

import {
    GET_USERINFO,
    SAVE_ADDRESS
} from './mutation-types.js'

export default {

    async getUserInfo({
        commit,
        state
    }) {
        let res = await getUser();
        commit(GET_USERINFO, res)
    },

    async saveAddress({
        commit,
        state
    }) {
        if (state.removeAddress.length > 0) return;

        let address = await getAddressList(state.userInfo.user_id);
        commit(SAVE_ADDRESS, address)
    }
}