/*
 * @Author: your name
 * @Date: 2020-10-13 14:37:49
 * @LastEditTime: 2020-10-13 14:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.0项目搭建\vue3.0\vue3.0test\vue.config.js
 */
module.exports = {
  configureWebpack: {
    devServer: {
      open: true, //autoOpenBrowser
      host: '127.0.0.1',
      port: 3003
    }
  }
}