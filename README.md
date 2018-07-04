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

> 2018年5月30日08:47:29 第八次更新
    1. 新增shop模块

> 2018年5月30日16:58:36 第九次更新
    1. 新增shop模板的子组件shopDetail
    2. 新增shopDeatil的子组件shopSafe


> 2018年6月4日17:54:39 第十次更新
    这几天都在忙公司的事情， 又不更新了， 忙完了， 就得晚上再开始仿写了；
    新增searchAddress, searchAddress, chooseAddress模块；
    写了那么久， 我始终觉得， 这个作者真乃有大智慧啊
    令后人模板啊

> 2018年6月4日19:56:21 第十一次更新
    完成remark模块， 备注

> 2018年6月8日20:59:10 第十二次更新
    订单页面未完成；

> 2018年6月12日10:10:07 第十三次更新
    搜索页面

> 2018年6月25日21:01:21 第十四次更新
    好久都没有抄写了， 都快忘了， 先把个人用户信息界面写完
> 2018年7月2日21:24:38 第十五次更新
    完成'我的'个人信息
    完成功能有：
    上传头像 未完成
    修改用户名   没有接口只是修改了vuex里面数据
    收货地址   新增地址 搜索地址 删除地址 没有修改地址功能
    修改密码功能

> 2018年7月4日15:21:39 第十六次更新
    最近几天沉迷电视剧《大明王朝1566》还买了优酷会员, 昨天也是看完了， 所以今天就开始抄写了；
    这个抄写完毕之后，就开始抄vux组件库；
    这次更新主要完成'我的' -> '我的优惠'
    功能：  红包
            红包说明
            查看历史红包
            兑换红包
            推荐有奖
            商家代金卷
            商家代金卷说明
            下载app
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
