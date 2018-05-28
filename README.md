# vue_cli-2.9.0_elem

> vue_cli 2.9.0 仿写饿了么app

> 2018年5月22日20:57:55 更新基础架子已经完成。

> 第二次更新： 完成home模块
    1. svgIcon 组件
    2. headTop 组件
    3. vuex 的应用
    4. scss 应用
    5. es7 async 和 await 的应用
    6. Promise 应用
    7. fetch 应用
    8. es6 结构


> 2018年5月24日18:50:51 第三次更新
    1. alertTip 组件
    2. 完成login模块
    3. 使用rem

> 2018年5月24日19:51:48 第四次更新
    1. display: flex;应用

> 2018年5月25日17:34:07 第五次更新
    1.完成城市列表模块

> 2018年5月26日17:18:52 第六次更新
    1. 完成footGuide 组件
    2. 完成shoplist 组件
        1) 添加shoplist请求方法
        2) 在mUtils 里面添加showBack, 和animate方法
        3) 在mixin中添加loadMore, getImgPath
        4) 完成loading 组件
        5) 完成ratingStar 组件
    3.在getData 添加 msiteAddress, misteFoodTypes, cityGuess 三个方法
    4. 引用Swiper 插件

    这个组价非常的难写， 就光抄写部分就是问题很多；
    比如原版引用
    import 'src/plugins/swiper.min.js'
    但是抄写的时候，就是不行，所以只能npm install swiper --save
    import Swiper from 'swiper'

> 2018年5月28日13:03:51 第七次更新
    1.新增food 模块；
    2. 新增 foodCategory, foodDelivery, foodActivity  方法
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
