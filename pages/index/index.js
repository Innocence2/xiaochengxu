Page({
  data: {
    // sliderList:[
    //   { "id": 1, "image": "http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg", "link": "" }, { "id": 2, "image": "http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg", "link": "/pages/list/list?cat=10" }
    // ],
    imgUrls: [
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2502051649,633499492&fm=27&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=811553998,4113305366&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=475400022,469738005&fm=26&gp=0.jpg'
    ],
   
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  //事件处理函数
   
  // onLoad: function (options) {
  //   wx.request({
  //     url: 'https://locally.uieee.com/slides', //仅为示例，并非真实的接口地址
  //     data: {
  //     },
  //     dataType:"json",
  //     success:function(res){
  //       this.setData({
  //         sliderList:res.data
  //       })
  //     },
  //     fail:function(res){},
  //     complete:function(res){

  //     }
  //   })
  // },

  
})
