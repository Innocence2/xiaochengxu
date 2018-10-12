//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    footList:[
      {
        id:1,
        title:'麻辣香锅1',
        cost:145,
        desc:"进口意大利精心之最哦",
        icon:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1316766511,47820702&fm=27&gp=0.jpg",
        num:0
      },
      {
        id: 2,
        title: '麻辣香锅2',
        cost: 245,
        desc: "进口意大利精心之最哦",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1316766511,47820702&fm=27&gp=0.jpg",
        num: 0
      },
      {
        id: 3,
        title: '麻辣香锅3',
        cost: 345,
        desc: "进口意大利精心之最哦",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1316766511,47820702&fm=27&gp=0.jpg",
        num: 0
      },
      {
        id: 4,
        title: '麻辣香锅4',
        cost: 445,
        desc: "进口意大利精心之最哦",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1316766511,47820702&fm=27&gp=0.jpg",
        num: 0
      }
    ]
  }
})