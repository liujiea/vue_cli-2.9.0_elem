/*
* @Author: liujie
* @Date:   2018-05-23 10:15:52
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-25 10:28:10
*/
/**
 * 存储localStorage
 * @param  {[type]} name    [description]
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content)
}


/**
 * 获取localStorage
 */

export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name)
}