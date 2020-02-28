//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/lunbo.jpg',
      'https://m.qpic.cn/psb?/V14JKMah2Af8Qk/3qz7*v5BoAXF0UISbf1*N13Z6Bc8UdQ1xy5JzD9cluw!/b/dFMBAAAAAAAA&bo=0gY4BAAAAAARB9g!&rf=viewer_4',
      'https://m.qpic.cn/psb?/V14JKMah213sKV/evoLcXwxd3iLsygiEXgt.Y5ghdbaHOaYGvalZyFbKRk!/b/dLgAAAAAAAAA&bo=HATMAwAAAAARB.c!&rf=viewer_4',
      'https://m.qpic.cn/psb?/V14JKMah2dDIBA/CC0bexhdqJZgaQIMB5CGO.t8wgszl.wKUMsCJKq6nvM!/b/dIMAAAAAAAAA&bo=Cgc2BAAAAAARBw8!&rf=viewer_4'
    ],
    iconurl:[
      {
        url:"../../icon/jingxin.png",
        name:"精心细作"
      },
      {
        url: "../../icon/lvsehuanbao.png",
        name: "绿色环保"
      },
      {
        url: "../../icon/yishufengge.png",
        name: "艺术风格"
      },
      {
        url: "../../icon/guojimingliu.png",
        name: "国际名流"
      },
      {
        url: "../../icon/lingxianchaoliu.png",
        name: "领先潮流"
      },
      {
        url: "../../icon/zunguishehua.png",
        name: "尊贵奢华"
      },
    ],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    chanpin:[
      {
        url:"https://m.qpic.cn/psb?/V14JKMah2Af8Qk/3qz7*v5BoAXF0UISbf1*N13Z6Bc8UdQ1xy5JzD9cluw!/b/dFMBAAAAAAAA&bo=0gY4BAAAAAARB9g!&rf=viewer_4",
        name:"后现代系列-酒柜",
        xiangxi: "拥有一份懒懒的心情，梦想于精美典雅的浪漫居庭，或躺，或坐，在宁静祥和的午后，或聊，或笑，悠悠然享一份无尚尊贵与优雅。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah213sKV/evoLcXwxd3iLsygiEXgt.Y5ghdbaHOaYGvalZyFbKRk!/b/dLgAAAAAAAAA&bo=HATMAwAAAAARB.c!&rf=viewer_4",
        name: "简欧系列-榻榻米",
        xiangxi: "橱柜格调的体现不仅仅靠设计的风格和家居的摆设。在这个时尚的家居中，光线游离到每一个角落，灵魂的空间视乎有生命般的美丽、精致、脱俗的气息。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1eIMhz/PKfgQcLJDscuPE6vyU.hQu*3TmuFgvwOXKc0YYX8bqc!/b/dFMBAAAAAAAA&bo=6AY4BAAAAAARB.I!&rf=viewer_4",
        name: "美式系列-酒柜",
        xiangxi: "遵循“少就是多”的设计理念，以简洁形式呈现出产品内在结构的完美，曾经让现代设计大师们迷醉的风格，在这里一脉相传。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2dDIBA/CC0bexhdqJZgaQIMB5CGO.t8wgszl.wKUMsCJKq6nvM!/b/dIMAAAAAAAAA&bo=Cgc2BAAAAAARBw8!&rf=viewer_4",
        name: "欧式系列-酒柜",
        xiangxi: "凝聚欧陆韵味与中华精雕光彩，无遗地向世人展示一个几近唯美的写意空间，原木本色，衬托出古典细致的现代客厅景观。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah0SjBr5/rm9MkNFXaqM*xxt3LJfqEzh.Sp2L3KpghQvDBS5xH3A!/b/dL4AAAAAAAAA&bo=ggQ2BAAAAAARB4Q!&rf=viewer_4",
        name: "时尚混搭系列-榻榻米",
        xiangxi: "是陶醉于极致完美？还是倾心于美轮美奂？或是惊叹于细节的推敲，空间接触艺术的脉搏，只有一份经久不衰的魅力，高贵与浪漫共舞，惊艳和绝妙共生，缔造永恒的礼堂盛宴。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2pcmOn/*uJzTxJ1qW5obO4nISikJC*lr7Cr7V6q5IsBeCQZ68E!/b/dFMBAAAAAAAA&bo=6gY4BAAAAAARB.A!&rf=viewer_4",
        name: "现代系列-橱柜",
        xiangxi: "选取上等的原料，通过艺术化的细节雕琢，再现出一种充满生活气息而瑰丽的色彩，以及极致华美、浪漫尊贵的气质。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1nRN0i/Kk0fhWtlWIBzZLN96CT1yey64qQ1y0zI2iVXahnGb7U!/b/dL4AAAAAAAAA&bo=ngQ4BAAAAAARB5Y!&rf=viewer_4",
        name: "新中式系列-推拉门衣柜",
        xiangxi: "享受自然的味道......随处可寻的木质的清香，静静醇醇的，一如简单的幸福，寻到那抹静谧，现于城市中，留在生活里。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah0XTPKB/pNLOpeHkRYMToUtScL40dLdn3zaH1Apuj3SmGwpEhv4!/b/dL4AAAAAAAAA&bo=FgTEAwAAAAARB.U!&rf=viewer_4",
        name: "中式系列-榻榻米",
        xiangxi: "空谈误国，实干兴邦，对应到企业也是如此，大实永远只潜心做好产品，做好服务。团队的建设至关重要，大实重视每一个伙伴，珍惜每一次信赖，感动每一次付出。"
      }
    ],
    
    xiang:[]
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '13392773250',
    })
  },
  toxiangqing: function (e) {
    this.setData({
      xiang: e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/xiangqing/xiangqing?index=' + this.data.aid + "&reshousuo=" + encodeURIComponent(JSON.stringify(this.data.xiang)),
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  }
})
