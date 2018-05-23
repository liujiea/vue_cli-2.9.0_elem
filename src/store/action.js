/*
* @Author: liujie
* @Date:   2018-05-23 09:08:56
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-23 17:28:03
*/

import {
    getUser
} from '../service/getData'

import {
    GET_USERINFO
} from './mutation-types.js'

export default {

    async getUserInfo({
        commit,
        state
    }) {
        let res = await getUser();
        commit(GET_USERINFO, res)
    }
}