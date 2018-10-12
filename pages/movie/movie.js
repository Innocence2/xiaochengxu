var app = getApp()
Page({
  data: {
    navbar: ['喜剧', '爱情', '悬疑'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})