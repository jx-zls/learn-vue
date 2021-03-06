import App from '../app'
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../page/login/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['../page/signout/'], resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['../page/home/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../page/index/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
]