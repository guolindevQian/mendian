// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['关于我们', '联系我们', ],
    currentTab: 0,
    mobilephone: "133 9277 3250（梁总）",
    email: "1275045908@qq.com",
    wangzhi: "www.123.com",
    dizhi: "佛山市三水区西南街道兴业一路银元化工斜对面"
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  click: function (e) {
    wx.openLocation({
      latitude: 23.215124,
      longitude: 112.919327,
      scale: 15,
      name: '新爱家家居',
      address: '佛山市三水区西南街道兴业一路银元化工斜对面'
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '13392773250',
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})