/*
* @Author: liujie
* @Date:   2018-05-26 11:02:42
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-26 17:17:34
*/

'use strict';
import { getStyle } from 'src/config/mUtils'
import { imgBaseUrl, localapi, proapi } from 'src/config/env'

export const loadMore = {
    directives: {
        'load-more': {
            bind: (el, binding) => {
                let windowHeight = window.screen.height;
                let height;
                let setTop;
                let paddingBottom;
                let marginBottom;
                let requestFram;
                let oldScrollTop;
                let scrollEl;
                let heightEl;
                let scrollType = el.attributes.type && el.attributes.type.value;
                let scrollReduce = 2;
                if (scrollType == 2) {
                    scroll = el;
                    heightEl = el.children[0];
                } else {
                    scrollEl = document.body;
                    heightEl = el;
                }

                el.addEventListener('touchstart', () => {
                    height = heightEl.clientHeight;
                    if (scrollType == 2) {
                        height = height;
                    }
                    setTop = el.offsetTop;
                    paddingBottom = getStyle(el, 'paddingBottom');
                    marginBottom = getStyle(el, 'marginBottom');
                }, false)

                el.addEventListener('touchmove', () => {
                    loadMore();
                }, false);

                el.addEventListener('touchend', () => {
                    oldScrollTop = scrollEl.scrollTop;
                    moveEnd();
                }, false)

                const moveEnd = () => {
                    requestFram = requestAnimationFrame(() => {
                        if (scrollEl.scrollTop != oldScrollTop) {
                            oldScrollTop = scrollEl.scrollTop;
                            moveEnd();
                        } else {
                            cancelAnimationFrame(requestFram);
                            height = heightEl.clientHeight;
                            loadMore();
                        }
                    })
                }

                const loadMore = () => {
                    if (scrollEl.scrollTop + windowHeight >= height + setTop + paddingBottom + paddingBottom + marginBottom - scrollReduce) {
                        binging.value();
                    }
                }
            }
        }
    }
};

export const getImgPath = {
    methods: {
        //传递过来的图片地址需要处理后才能正常使用
        getImgPath(path) {
            let suffix;
            if (!path) {
                return '//elm.cangdu.org/img/default.jpg'
            }
            if (path.indexOf('jpeg') !== -1) {
                suffix = '.jpeg'
            } else {
                suffix = '.png'
            }

            let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
            return 'https://fuss10.elemecdn.com' + url;
        }
    }
}