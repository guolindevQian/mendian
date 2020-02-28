//获取应用实例
var app = getApp();
Page({
  data: {
    msgData: []
  },
  changeInputValue: function(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  //删除留言
  DelMsg:function(e) {
    var n = e.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n, 1);
    this.setData({
      msgData: list
    });
  },
  //添加留言
  addMsg: function() {
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    //更新
    this.setData({
      msgData: list,
      inputVal: ''
    });
  },
})