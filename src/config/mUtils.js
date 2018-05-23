/*
* @Author: liujie
* @Date:   2018-05-23 10:15:52
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-23 10:21:02
*/

/**
 * 获取localStorage
 */

export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}
