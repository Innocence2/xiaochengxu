// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data:{
      phone:'',
      password:''
    }
  },
  //获取账户输入账户
 pnoneInput:function(e){
   this.setData({
     phone:e.datail.value
   })
 },
 passwordInput:function(e){
   this.setData({
     password:e.detail.value
   })
 },
 //登录
 login:function(){
   if(this.data.phone.length==0||this.data.password.length==0){
     wx.showToast({
       title:'用户名和密码不能为空',
       icon:'loading',
       duration:2000
     })
   }else{
     //这里修改成跳转的页面
     wx.showToast({
       title:'登陆成功',
       icon:'success',
       duration:2000,
       url:'../index/index.wxml'
     })
   }
 }
})