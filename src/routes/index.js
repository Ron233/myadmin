/*
 * @Descripttion: 
 * @version: 
 * @Author: wrh
 * @Date: 2021-01-11 15:33:19
 * @LastEditors: wrh
 * @LastEditTime: 2021-01-11 16:19:14
 */
export default [
  {
    path:'/login',
    component:'@/pages/Login'
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { 
        path: '/', 
        component: '@/pages/Index',
      },
    ],
  }
]