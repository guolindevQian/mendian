// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['时尚混搭系列', '后现代系列', '新中式系列', "现代系列", "简欧系列","欧式系列","中式系列","美式系列","移门系列","材料系列"],
    currentTab: 0,
    scrollLeft:0,
    shishangjianjie:"混搭风格的家居设计。混搭风格糅合东西方美学精华元素，将古今文化内涵完美地结合于一体，充分利用空间形式与材料，创造出个性化的家居环境。混搭并不是简单地把各种风格的元素放在一起做加法，而是把它们有主有次地组合在一起。混搭得是否成功，关键看是否和谐。",
    houxiandaijianjie:"后现代的概念至今没有一个确切的定义，这是由后现代的多元性和复杂性决定的。不确定性是后现代的根本特征之一，这一概念具有多重含义。后现代对当代人的精神冲击是全方位的，在思维理论论层面上可以肯定后现代的批判否定精神和异质多样的文化意向，后现代室内设计只有在其“异样实物”中，才会获得自身的规定和理念。",
    xinzhongshijianjie:"新中式风格诞生于中国传统文化复兴的新时期，伴随着国力增强，民族意识逐渐复苏，人们开始从纷乱的“模仿”和“拷贝”中整理出头绪。在探寻中国设计界的本土意识之初，逐渐成熟的新一代设计队伍和消费市场孕育出含蓄秀美的新中式风格。在中国文化风靡全球的现今时代，中式元素与现代材质的巧妙兼柔。",
    xiandaijianjie:"现代风格是比较流行的一种风格，追求时尚与潮流，非常注重居室空间的布局与使用功能的完美结合。现代主义也称功能主义，是工业社会的产物，其最早的代表是建于德国魏玛的包豪斯学校。其主题是：要创造一个能使艺术家接受现代生产最省力的环境—机械的环境。这种技术美学的思想是本世纪室内装饰最大的革命。",
    jianoujianjie:"简欧风格就是简化了的欧式装修风格。也是目前住宅别墅装修最流行的风格。简欧风格更多的表现为实用性和多元性。简欧家居包括床、电视柜、书柜、衣柜、橱柜等等都与众不同，营造出日常居家不同的感觉。文化丰富的艺术底蕴，开放、创新的设计思想及其尊贵的姿容。",
    oushijianjie:"欧式风格，是一种来自于欧罗巴洲的风格。主要有法式风格，意大利风格，西班牙风格，英式风格，地中海风格，北欧风格等几大流派。所谓风格，是一种长久以来随着文化的潮流形成的一种持续不断，内容统一，有强烈的独特性的文化潮流。欧式风格就是欧洲各国文化传统所表达的强烈的文化内涵。",
    zhongshijianjie:"中式传统的室内设计融合了庄重与优雅双重气质。中式风格更多的利用了后现代手法，把传统的结构形式通过重新设计组合以另一种民族特色的标志出现。中式风格的代表是中国明清古典传统家具及中式园林建筑、色彩的设计造型。特点是对称、简约、朴素、格调雅致、文化内涵丰富，中式风格家居体现主人的较高审美情趣与社会地位。",
    meishijianjie:"美式系列，顾名思义是来自于美国的装修和装饰风格。是殖民地风格中最著名的代表风格，某种意义上已经成了殖民地风格的代名词。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。",
    shishanghunda:[
      {
        url:"https://m.qpic.cn/psb?/V14JKMah0SjBr5/rm9MkNFXaqM*xxt3LJfqEzh.Sp2L3KpghQvDBS5xH3A!/b/dL4AAAAAAAAA&bo=ggQ2BAAAAAARB4Q!&rf=viewer_4",
        name:"时尚混搭系列-榻榻米",
        xiangxi:"是陶醉于极致完美？还是倾心于美轮美奂？或是惊叹于细节的推敲，空间接触艺术的脉搏，只有一份经久不衰的魅力，高贵与浪漫共舞，惊艳和绝妙共生，缔造永恒的礼堂盛宴。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah0SjBr5/9TuGvwkVZXJ.nSyE6Y6NOT4aG68P6mX.YJSKl.uD*5M!/b/dL8AAAAAAAAA&bo=6gY4BAAAAAARB.A!&rf=viewer_4",
        name: "时尚混搭系列——卧室",
        xiangxi: "不论流行是如何的瞬息万变，底蕴深厚的设计方能成为经典，用典雅的色调搭配，蜿蜓伸展到你生活最深最美的梦里。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah0SjBr5/3VEEg2gNRyLw0v9VdfrRdlJIlBYrJv9hSRsL4GVYibc!/b/dDYBAAAAAAAA&bo=*AY4BAAAAAARB*Y!&rf=viewer_4",
        name: "时尚混搭系列——酒柜",
        xiangxi: "是陶醉于极致完美？还是倾心于美轮美奂？或是惊叹于细节的推敲，空间接触艺术的脉搏，只有一份经久不衰的魅力，高贵与浪漫共舞，惊艳和绝妙共生，缔造永恒的礼堂盛宴。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah0SjBr5/Of*8VGYj4.OQW5aDoYBvzD7VMOHVrbv4jFZYqHP3*DE!/b/dAQBAAAAAAAA&bo=jgY4BAAAAAARB4Q!&rf=viewer_4",
        name: "时尚混搭系列-休闲室",
        xiangxi: "这不是艺术的顶峰，这只是艺术美丽的一角，这不是生活的珣美花园，这只是幸福的一个小站，在这里每分每秒，都会成为你难以忘怀的惊喜。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0SjBr5/Pc7d57UYJazf8R7rdmkVS3hU4ZkkgfCUIALIRn26evY!/b/dFMBAAAAAAAA&bo=9AY4BAAAAAARJ94!&rf=viewer_4",
        name: "时尚混搭系列——收藏柜",
        xiangxi: "简洁的线条且做工精细，使整体具有亲切的豪华感，轻盈的通透感，显著的美感，一点一线，俱是独具匠心，和你一起享受生活之美。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0SjBr5/wQeU3jsd81UTwR04q3FwIZ7JHCwR7E8ERBDXRUUj2hI!/b/dL4AAAAAAAAA&bo=2gY4BAAAAAARJ*A!&rf=viewer_4",
        name: "时尚混搭系列——电视柜",
        xiangxi: "引领时尚之先，来自创新的灵智，稳重飘逸的外表内藏无尽的智慧，尊贵典雅气质尽显自如潇洒。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0SjBr5/LogVHmfx3s5a*W4XhB2pV34RppEW9.dR9QcspXZomJ0!/b/dMUAAAAAAAAA&bo=6gY4BAAAAAARJ8A!&rf=viewer_4",
        name: "时尚混搭系列——卧室",
        xiangxi: "在量身定制的荣耀中，领略博大的生活真意，演绎生活中灵犀相应的奢华与异域风情，这一刻，空中仿佛氤氲着咖啡的香甜余味。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah0SjBr5/Eaq*cvy25347UEK1wKD3OSwL5TSP4eAzf3rPSkJvGu4!/b/dDQBAAAAAAAA&bo=cAg4BAAAAAARB3Q!&rf=viewer_4",
        name: "时尚混搭系列——推荐选择移门",
        xiangxi: "时尚、简约、贵气，午后，明媚的阳光总会点缀出若隐若现的神秘空间，使人们对生活有了另一种认知。"
      }
    ],
    houxiandai:[
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2Af8Qk/3qz7*v5BoAXF0UISbf1*N13Z6Bc8UdQ1xy5JzD9cluw!/b/dFMBAAAAAAAA&bo=0gY4BAAAAAARB9g!&rf=viewer_4",
        name: "后现代系列-酒柜",
        xiangxi: "拥有一份懒懒的心情，梦想于精美典雅的浪漫居庭，或躺，或坐，在宁静祥和的午后，或聊，或笑，悠悠然享一份无尚尊贵与优雅。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2Af8Qk/JXh1auLaLmwqdr0uzggCgLEnsmQFHypWDPiNYe1b8cg!/b/dE0BAAAAAAAA&bo=GgTCAwAAAAARJ88!&rf=viewer_4",
        name: "后现代系列-衣帽间",
        xiangxi: "美，浸入心扉的迷醉......寻着那让人沉醉的古老文化的神韵，看那细微之中的每条纹理，都凝聚了我付予你的爱，都是那，在传说与传说之间，缓慢游走的灵魂。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2Af8Qk/9Ef.a2LMId.8Z0OlX5.4pifmzk*vcvRhhDM03WoBZe0!/b/dL8AAAAAAAAA&bo=5gY4BAAAAAARB.w!&rf=viewer_4",
        name: "后现代系列-电视柜",
        xiangxi: "夜幕深垂，橙月挂在相思河畔，你我相投入恬静的心灵家园，自如舒展身体的重叠处，莲花般绽放在月光下，拥抱空间处流动的温馨。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2Af8Qk/tHeDT0e.Mwl9.tX2eRVFpjJTX21IcuUq1D8Pbt7c.AY!/b/dMQAAAAAAAAA&bo=ogQ2BAAAAAARF7Q!&rf=viewer_4",
        name: "后现代系列-推拉门衣柜",
        xiangxi: "外观简练，色彩冷静，现代感十足，岁月不经意间留下的痕迹，即使是只是班驳的纹路，沉默的色彩，也是对我们最好的馈赠，沉甸甸地放在手上和心中。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2Af8Qk/n5799b4t60yWkOXdABTSy0Lf8CcEkHKApdAEoI9NHUI!/b/dL8AAAAAAAAA&bo=2gY4BAAAAAARJ*A!&rf=viewer_4",
        name: "后现代系列-榻榻米",
        xiangxi: "夜幕深垂，橙月挂在相思河畔，你我相投入恬静的心灵家园，自如舒展身体的重叠处，莲花般绽放在月光下，拥抱空间处流动的温馨。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2Af8Qk/LRjJ41*f*MiEirj*LEE1eKAqM.KOyft8WSsu00Sha0s!/b/dD4BAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "后现代系列-推荐选择移门",
        xiangxi: "王者风范，从容有力，不肆张扬，睿智深邃，犹如洗去铅华沉淀下来的人生，独留一身优雅与豁达。"
      }
    ],
    xinzhongshi:[
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1nRN0i/Kk0fhWtlWIBzZLN96CT1yey64qQ1y0zI2iVXahnGb7U!/b/dL4AAAAAAAAA&bo=ngQ4BAAAAAARB5Y!&rf=viewer_4",
        name: "新中式系列-推拉门衣柜",
        xiangxi: "享受自然的味道......随处可寻的木质的清香，静静醇醇的，一如简单的幸福，寻到那抹静谧，现于城市中，留在生活里。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1nRN0i/tuitrI7DGbqM2W0*JqCM0FJ*MLSNIqnKigi*rRutqt0!/b/dLYAAAAAAAAA&bo=.AY4BAAAAAARB*I!&rf=viewer_4",
        name: "新中式系列-掩门衣柜",
        xiangxi: "穿越生活美学的背后，孜孜不倦的追求，一种极致，高雅的生活，以不变胜万变，在简约中，体会优雅，在优雅中，感悟门品的精致与华丽。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1nRN0i/9c11tqxzstomyM6jp6sCQjf4wgVoSlnUTVFXt1afqrA!/b/dL4AAAAAAAAA&bo=2gY4BAAAAAARB9A!&rf=viewer_4",
        name: "新中式系列-衣帽间",
        xiangxi: "真正体验我们所带给您惊喜，浑然天成之尊贵感，瞬间诠释——意境、文化，品味、艺术，完美卓越，让您在一瞬间被她吸引，让家再也离不开她，二被完全拥抱。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1nRN0i/KrY.0yb8NMYL2jfyGEwEitL489NiuCrId1QxZV724Ls!/b/dL4AAAAAAAAA&bo=4gY4BAAAAAARB.g!&rf=viewer_4",
        name: "新中式系列-榻榻米",
        xiangxi: "外观简练，色彩冷静，现代感十足，岁月不经意间留下的痕迹，即使是只是班驳的纹路，沉默的色彩，也是对我们最好的馈赠，沉甸甸地放在手上和心中。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1nRN0i/QEc0MiLbaJ0U5.kFboyyu71WuGwAWbd7ltXHMJU9Cg4!/b/dDcBAAAAAAAA&bo=8AY4BAAAAAARJ9o!&rf=viewer_4",
        name: "新中式系列-书柜",
        xiangxi: "简约主义就是把设计简化到它的本质，强调它内在的魅力，在这种充满冷调的现代与未来交织的情境中，会由简单而产生理性、秩序和专业感。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1nRN0i/CvtiMezvrZGPvCEVMX0cJUuetqABcIjQHLjowSUZgHw!/b/dL8AAAAAAAAA&bo=ygY4BAAAAAARF9A!&rf=viewer_4",
        name: "新中式系列-电视柜",
        xiangxi: "高贵典雅的造型，轻柔美妙的触感，让一切变得自然舒适，昨日的无尽荣耀，明日的再次辉煌，在你的优雅中演绎今日的经典时尚。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1nRN0i/aL8WBpkDgag9ZXGi5oQbR8xPDQvn3kmy4KuFRyDW46I!/b/dFMBAAAAAAAA&bo=4gY4BAAAAAARF*g!&rf=viewer_4",
        name: "新中式系列-酒柜",
        xiangxi: "美，浸入心扉的迷醉......寻着那让人沉醉的古老文化的神韵，看那细微之中的每条纹理，都凝聚了我付予你的爱，都是那，在传说与传说之间缓缓游走的灵魂。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1nRN0i/MVRZ6Sk0S6achRrNTNAE2Ud1KaB3RGBDUqwebtMoSbg!/b/dMMAAAAAAAAA&bo=8gY4BAAAAAARF.g!&rf=viewer_4",
        name: "新中式系列-橱柜",
        xiangxi: "在量身定制的荣耀中，领略博大的生活真意，演绎生活中灵犀相应的奢华与异域风情，这一刻，空中仿佛氤氲着咖啡的香甜余味。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1nRN0i/E4PdExOtT1nFFyK*RY1E48rU5K5mOCfFrOtAmfQtCK0!/b/dLgAAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "新中式系列-推荐选择移门",
        xiangxi: ""
      }
    ],
    xiandai:[
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2pcmOn/*uJzTxJ1qW5obO4nISikJC*lr7Cr7V6q5IsBeCQZ68E!/b/dFMBAAAAAAAA&bo=6gY4BAAAAAARB.A!&rf=viewer_4",
        name: "现代系列-橱柜",
        xiangxi: "选取上等的原料，通过艺术化的细节雕琢，再现出一种充满生活气息而瑰丽的色彩，以及极致华美、浪漫尊贵的气质。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2pcmOn/0rqfB6fwQlbgK7AEVPwCPICLCNubbVpS9ONlXfBb4rQ!/b/dDYBAAAAAAAA&bo=6gY4BAAAAAARB.A!&rf=viewer_4",
        name: "现代系列-电视柜",
        xiangxi: "不论流行是如何的瞬息万变，底蕴深厚的设计方能成为经典，用典雅的色调搭配，蜿蜓伸展到你生活最深最美的梦里。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2pcmOn/khXmXQRPmpyQ6KUnWSzNYRS9sDzoIvGdZoG5HmnNbJk!/b/dL8AAAAAAAAA&bo=4gY4BAAAAAARB.g!&rf=viewer_4",
        name: "现代系列-书柜",
        xiangxi: "繁华的城市生活真的有越来越多的选择，对于品味生活有高标准的您，总是不去盲目追逐普遍的人热衷的事情，自得其乐，您的选择是为了取悦自己。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2pcmOn/L89y11VckYDIcjwh3k8IvIBVyrQlZ22IQefcdkyEul0!/b/dFYBAAAAAAAA&bo=6gY4BAAAAAARB.A!&rf=viewer_4",
        name: "现代系列-酒柜",
        xiangxi: "在苍白与凝重之间，设计师努力寻找一条中间路线，简约而不简单，高雅而不奢华，怀旧而不伤感，居室没有生命，但我们赋予了它生命，它便全记住很多事。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2pcmOn/kJiQEoGD7HbDktckjwt9oOyjGOPTY617SmY5Uini4nk!/b/dLgAAAAAAAAA&bo=Pgc4BAAAAAARJxU!&rf=viewer_4",
        name: "现代系列-榻榻米",
        xiangxi: "经历了千年的轮回，在岁月的沉淀里汲取精华，与现代文明的完美结合，与个性的魅力相互彰印，回眸，只为了您的尊贵。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2pcmOn/p9GMCQa0kPcdfy56R4wFzTRn*I1EFsM8797vaUD7vEY!/b/dFMBAAAAAAAA&bo=7AY2BAAAAAARN9g!&rf=viewer_4",
        name: "现代系列-卧室",
        xiangxi: "新潮大胆地追逐个性化色彩，不拘雅俗地感受时尚潮流，大都市的空间总是用家具与饰物来引领潮流，令人眼睛为之一亮。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2pcmOn/ohiflzJdIEpL.xjkcTPb1aZh5F3sHgbEYNyViLPz7uI!/b/dDYBAAAAAAAA&bo=sgY4BAAAAAARJ5g!&rf=viewer_4",
        name: "现代系列-推拉门衣柜",
        xiangxi: "来自时尚的设计灵感，透出一种柔美、简约的工艺，造型简洁大方，产品突出线条美感，演绎个性主义的同时也带个人一种视觉上的享受。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2pcmOn/AFVzD85*ctzFz5bNxewXhZKo83dW2LiS.2HKI9QWyZc!/b/dDEBAAAAAAAA&bo=EAc4BAAAAAARJzs!&rf=viewer_4",
        name: "现代系列-推拉门衣柜",
        xiangxi: "生活如同品茶一般，即可领略艺术的精妙，又得到脾胃的实惠，在这样的一种境界里，您会觉得生活是乏味或是单调的吗？"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2pcmOn/ZA3ykTDV9PeDJcc5o8imlj99k*2v9BcMM.Ax1.JfJrE!/b/dIQAAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "现代系列-推荐选择移门",
        xiangxi: "不论流行是如何的瞬息万变，底蕴深厚的设计方能成为经典，用典雅的色调搭配，蜿蜓伸展到你生活最深最美的梦里。"
      }
    ],
    jianou:[
      
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/evoLcXwxd3iLsygiEXgt.Y5ghdbaHOaYGvalZyFbKRk!/b/dLgAAAAAAAAA&bo=HATMAwAAAAARF*c!&rf=viewer_4",
        name: "简欧系列-榻榻米",
        xiangxi: "橱柜格调的体现不仅仅靠设计的风格和家居的摆设。在这个时尚的家居中，光线游离到每一个角落，灵魂的空间视乎有生命般的美丽、精致、脱俗的气息。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/t9HgQa5LjTz0NoveNq8pngp417XrcQSRR.FZRBiKgE8!/b/dAUBAAAAAAAA&bo=agY4BAAAAAARF3A!&rf=viewer_4",
        name: "简欧系列-收藏柜",
        xiangxi: "光照生活，接近自然。当生活能够选择的时候，才是享受。选择一扇简约清秀的门，让生活散放一股书卷气息。给爱家的人一个更美好的家。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/YpZXRXfDEfqHlMqjZ*GBwWjvvc7rWxLjYjhfqD.OITM!/b/dL8AAAAAAAAA&bo=5gY4BAAAAAARF*w!&rf=viewer_4",
        name: "简欧系列-卧室",
        xiangxi: "品味是一门艺术，在于捕捉每一处生活所隐匿的文化内涵，从而启动创意生活的灵感。简洁和谐、舒适又不偏离自然的高雅设计，才是生活的标准。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/QMFpJV4Yli5.90*D*XQj2*jbGaaa4imI0kqGYFyvXp4!/b/dMUAAAAAAAAA&bo=dAY4BAAAAAARJ14!&rf=viewer_4",
        name: "简欧系列-酒柜",
        xiangxi: "在宣扬居室个性的年代，看似平常的门并不会消磨个人特色，既可以体现出现代优雅的风格，又体现出另类的个性风格。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/UtGpuM8QF9.r0SvUYb1hHcPCanuBPMAbhE80eNworsA!/b/dL4AAAAAAAAA&bo=hgU4BAAAAAARJ68!&rf=viewer_4",
        name: "简欧系列-酒柜",
        xiangxi: "艺术的生活，源于舒适的整体空间，房间的主体色彩平实简洁，却精巧自然，在隐约将主人对感受生活的向往和追求一览无遗的表露出来。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/yvRpoSluL*CuiZtufkih3fnPH0ql2xGfr7l76zfJrFE!/b/dIMAAAAAAAAA&bo=9AY4BAAAAAARJ94!&rf=viewer_4",
        name: "简欧系列-电视柜",
        xiangxi: "高贵的造型，流畅的线条，柔丽闲雅的色彩，朴素大方的设计，让人有如诗如画般的感觉，在宽阔的视野中体现尊贵与不凡。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/Eehm0Vwq7.cJB2UsFs2XbdtiwNuAXmzRG7xgGNUqE24!/b/dLYAAAAAAAAA&bo=pgQ4BAAAAAARF74!&rf=viewer_4",
        name: "简欧系列-电视柜",
        xiangxi: "色调明快、和谐、典雅，造型简约，富时代感。线条优美流畅，做工严谨精细，这是艺术的创造过程，也是巧匠灵思的精品。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/PHdrXm8rvuF*YxEYRmqMXGd.iV4YoB2.3B2Tmqv0GC8!/b/dL8AAAAAAAAA&bo=Ugc4BAAAAAARJ3k!&rf=viewer_4",
        name: "简欧系列-衣帽间",
        xiangxi: "经典的家具，调和出浪漫的氛围，精湛的工艺于细节处流露时尚与高贵，光彩亮丽的表面，给人在和谐的感受之外，增添了一种现代时尚的美感。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/XrtKj6Q1m.BcCDD0b.FpG1QYXpqZo1ud4oLIhWuFym8!/b/dL8AAAAAAAAA&bo=*gY4BAAAAAARJ9Q!&rf=viewer_4",
        name: "简欧系列-电视柜",
        xiangxi: "现代生活，我们视乎更容易迷失，总要寻找一些东西，波浪线条质朴而实在，摒弃了一切的奢华，让我们重新寻回那种清水芙蓉般的存真。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah213sKV/aeVjn8qcHUTykmUKKEdIsByRkCzRKNFpwHTHY2Az.c8!/b/dL4AAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "简欧系列-推荐选择移门",
        xiangxi: "全屋定制，为改变您的生活而来。"
      }
    ],
    oushi:[
      {
        url: "https://m.qpic.cn/psb?/V14JKMah2dDIBA/CC0bexhdqJZgaQIMB5CGO.t8wgszl.wKUMsCJKq6nvM!/b/dIMAAAAAAAAA&bo=Cgc2BAAAAAARBw8!&rf=viewer_4",
        name: "欧式系列-酒柜",
        xiangxi: "凝聚欧陆韵味与中华精雕光彩，无遗地向世人展示一个几近唯美的写意空间，原木本色，衬托出古典细致的现代客厅景观。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2dDIBA/trB*7Xe.0TV4yR0LvzBl05BvDQ6XNbBCJCo*iRRU67E!/b/dL8AAAAAAAAA&bo=yAY4BAAAAAARJ.I!&rf=viewer_4",
        name: "欧式系列-卧室",
        xiangxi: "以理性思维诠释现代典雅的橱柜或简约时尚、或大气磅礴、或清新自然、尽显实力加魅力、品味加定位的深厚蕴涵、引领全新格调生活。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2dDIBA/v*e1zKWKKKtAEh57OO8YCip0ynSOM0XrV.4RnlLKCFU!/b/dFQBAAAAAAAA&bo=rgY2BAAAAAARJ4o!&rf=viewer_4",
        name: "欧式系列-书柜",
        xiangxi: "追求细节，直至苟求。细节是整体美感的灵魂，细节的合理用度、创造组合就是美。好产品本身有观点，细节见证品质，有细节的空间才是唯美的。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2dDIBA/AHkCeuqjEyWUgdcFYIS4dP5Th7AbEoz07lp3ew715vk!/b/dL8AAAAAAAAA&bo=2AY4BAAAAAARJ*I!&rf=viewer_4",
        name: "欧式系列-卧室",
        xiangxi: "欧式的建筑，异国的情调的装饰，最时尚的品牌行进着最自然的邂逅。最艺术的生活，承袭了时间、手工与个性的痕迹。如此极致纯粹的原味精神、一定让您叹为观止。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2dDIBA/j323nEX.vZvCXWgYpEDxabi9d8f8L9ronH28d*znKhA!/b/dL4AAAAAAAAA&bo=7AY4BAAAAAARJ8Y!&rf=viewer_4",
        name: "欧式系列-榻榻米",
        xiangxi: "娴静优美的气息从居室的每个角落散发出来。素洁轻盈的色彩。营造着浪漫的情趣生活，从此无拘无束在四季的悠闲时光中慢慢回来。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2dDIBA/O3ehIrt9RzTXzzZjm39e6*HTZHv..CV8RGjamPJEwqY!/b/dFIBAAAAAAAA&bo=Fgc2BAAAAAARJzM!&rf=viewer_4",
        name: "欧式系列-电视柜",
        xiangxi: "出色的人，曾经沧海横流历经风雨而金尊荣内敛，淡定而从容。出色的门，蕴含功能性之情怀，用艺术思索深藏不露。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah2dDIBA/twlLvRQ2vsw.1zjHtpOsV4ytTBX9DfIYnK9JDzMchR4!/b/dL4AAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "欧式系列-推荐选择移门",
        xiangxi: "做工精细简约凝练，各个都经精心筛选，以保证高品质的水准，完全是优异技术的结晶和精髓。"
      }

    ],
    zhongshi:[
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/pNLOpeHkRYMToUtScL40dLdn3zaH1Apuj3SmGwpEhv4!/b/dL4AAAAAAAAA&bo=FgTEAwAAAAARF*U!&rf=viewer_4",
        name: "中式系列-榻榻米",
        xiangxi: "空谈误国，实干兴邦，对应到企业也是如此，大实永远只潜心做好产品，做好服务。团队的建设至关重要，大实重视每一个伙伴，珍惜每一次信赖，感动每一次付出。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/2WRu13mp6WDxMLZJA0*17T0AMpzr3gQbchEDiyKJbJE!/b/dL8AAAAAAAAA&bo=lAQ2BAAAAAARJ7I!&rf=viewer_4",
        name: "中式系列-阳台柜",
        xiangxi: "东西方艺术文化的相随，使你惊奇的发现艺术的渊源，与事实是那么接近，那种天然生机之美，赋予家居坚强的生命力。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/UPaoWQ6GTTah9XMQe1gA1ik4Aqqii8lGqu6VsLBZFtc!/b/dFYBAAAAAAAA&bo=1AY2BAAAAAARJ*A!&rf=viewer_4",
        name: "中式系列-酒柜",
        xiangxi: "欣赏一种艺术需要智慧的细胞，体会一种生活需要感性的心灵，厌倦了现世的烦扰，就去寻找这种简约的艺术，在这份艺术空间里感受不一样的典雅与舒服。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/8I7RsWiwu4jnVHkOGSvVmELpyH*s*1oo9Mrrj9CuCtY!/b/dL8AAAAAAAAA&bo=5gY2BAAAAAARJ8I!&rf=viewer_4",
        name: "中式系列-推拉门衣柜",
        xiangxi: "该整体橱柜图片，满眼放去，温馨优雅，而仔细查看，会发现又有中式的沉稳大气。也许这就是消费者想要的那种家的感觉，很熟悉很放松的一个空间。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/QLBmdSSAydMRI8K24CSFIpmQxZG7.2bLgmLesSftEHo!/b/dL8AAAAAAAAA&bo=7AY4BAAAAAARF*Y!&rf=viewer_4",
        name: "中式系列-推拉门衣柜",
        xiangxi: "从简单中创造出实用性、功能性、装饰于一体的现代全屋，借各类实木门的个性搭配，显得多姿多彩灵活多变，在简洁明朗、优雅大方之中凸显个性与时尚。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/x1x5jT0rwVMDfczcryt3GPrsWiJxdQjskwYY7xBUdjM!/b/dL8AAAAAAAAA&bo=EATQAwAAAAARF.c!&rf=viewer_4",
        name: "中式系列-鞋柜",
        xiangxi: "只要独特的设计风格，在保持价值感的同时，带来个性主张的尽情释放。如同跳跃的音符，在自由的面具下，用奔放的激情，让身体和心灵都得以深呼吸！"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/NpIQ3wMwnqFbPvjtpzQagnxzsA.SY1TIN2QSpMS3WfM!/b/dL8AAAAAAAAA&bo=YAY4BAAAAAARF3o!&rf=viewer_4",
        name: "中式系列-儿童房衣柜",
        xiangxi: "以理性思维诠释现代典雅橱柜或简约时尚、或大气磅礴、或清新自然、尽显实力加魅力、品味加定位的深厚蕴涵引领全新格调生活。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah0XTPKB/XSo*a6kXS.YSLlhvIuw3JXJKXRGNWcp4loTDwGH76NY!/b/dEABAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "中式系列-推荐选择移门",
        xiangxi: "引领时尚之先，来自创新的灵智，稳重飘逸的外表内藏无尽的智慧，尊贵典雅气质尽显自如潇洒。"
      }
    ],
    meishi: [
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/PKfgQcLJDscuPE6vyU.hQu*3TmuFgvwOXKc0YYX8bqc!/b/dFMBAAAAAAAA&bo=6AY4BAAAAAARJ8I!&rf=viewer_4",
        name: "美式系列-酒柜",
        xiangxi: "遵循“少就是多”的设计理念，以简洁形式呈现出产品内在结构的完美，曾经让现代设计大师们迷醉的风格，在这里一脉相传。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/tVRN2S.fNnRpBhK.Qx0fT731PmOpcZohF94rX1XHa6A!/b/dMMAAAAAAAAA&bo=3gY4BAAAAAARJ*Q!&rf=viewer_4",
        name: "美式系列-收藏柜",
        xiangxi: "经历了千年的轮回，在岁月的沉淀里汲取精华，与现代文明的完美结合，与个性的魅力相互影印，目眸，只为了您的尊贵。"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah1eIMhz/RYrC4prPxE6K2XkJwyMxJhz*NHAQHzWGkCXP34SnIHc!/b/dDYBAAAAAAAA&bo=5AY4BAAAAAARB.4!&rf=viewer_4",
        name: "美式系列-衣帽间",
        xiangxi: "一样的复古，一样的清新，一样的奢华，却演绎出不一样的潮流时尚，在复古与时尚中放任游走，体验奢华一刻，感觉非同一般。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/gEWXcxqjgI.bv2jYOGtJRs2THa1ZTpu7Y7p.gIJxZHs!/b/dFQBAAAAAAAA&bo=3gY2BAAAAAARJ*o!&rf=viewer_4",
        name: "美式系列-书柜",
        xiangxi: "从不追求诱惑，从不追求新鲜，从不追求刺激，我只寻找属于我的安静一刻，在这宁静的家里，在门后的世界中，显然只是属于自己的世界。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/OFwgwCQq0DhA9lY*qR9Irp4DBy.a1sWPsE4hHdQpBtQ!/b/dLYAAAAAAAAA&bo=2gY4BAAAAAARJ*A!&rf=viewer_4",
        name: "美式系列-酒柜",
        xiangxi: "时代的间隔无法阻挠个性的追求，岁月无声地流淌，面对时光无需再做什么回答，让青春的韵律荡然在空间的每一个角落。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/3Y*AYAC6usIe*pe4MqL3sus3Ic7rFXoFRDfJ8yxULjQ!/b/dEEBAAAAAAAA&bo=GASgAwAAAAARF58!&rf=viewer_4",
        name: "美式系列-电视柜",
        xiangxi: "新潮流大胆的追逐个性化色彩，不拘雅俗地感受时尚潮流，大都市的空间总是用家具与饰物来引领潮流，令人眼睛为之一亮。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/8lWAw8onrTlBw2FeJINlkXMqN3Mo*9cfxZ3WIAcSFjg!/b/dAQBAAAAAAAA&bo=xAY4BAAAAAARJ.4!&rf=viewer_4",
        name: "美式系列-掩门衣柜",
        xiangxi: "忆古怀今，掩映间开启时光隧道，欧式的廊柱，古铜的怀扣，肃穆庄严，简练的线条却富于现代感。欧式掩门独特的风格，现代欧陆时尚尽情展现。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/es3d3qSAXDHuVG6ootju3l.f255DFYatX1XRAWar1BM!/b/dFEBAAAAAAAA&bo=wgY4BAAAAAARJ.g!&rf=viewer_4",
        name: "美式系列-推拉门衣柜",
        xiangxi: "融合，不是简单的堆砌，而是在不同风格上提炼出共同的元素，交融，形成新的风尚。混搭，不随波逐流，以创意另辟天地，追求内心最真切的感受。"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah1eIMhz/r*wwjSlko3NHTIVLBChiZsjiFxRPvLZ8vFxx4BwmOyI!/b/dIMAAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "美式系列-推荐选择移门",
        xiangxi: "现代技术与古典工艺完美结合"
      }
    ],
    yimen:[
      {
        url:"https://m.qpic.cn/psb?/V14JKMah26f0ky/jzA.Shgq6v.OaCuHY8jdku*4evQaQfH.VmjQMQrHaVo!/b/dL8AAAAAAAAA&bo=cAg4BAAAAAARB3Q!&rf=viewer_4",
        name:"推荐移门",
        xiangxi:""
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah26f0ky/dFSlp*58wPOrIID8V2tMWR09NxszQMo5TONSqNEuGyI!/b/dL8AAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "推荐移门",
        xiangxi: ""
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah26f0ky/a*Fk9RD7q2MBgze3Za7duLkrV62y0xrzk5jFbkSzFS4!/b/dDUBAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "推荐移门",
        xiangxi: ""
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah26f0ky/uZAqZGLMalCc*SYedo.fyA*sQelmtHz6tBytwlz*PWc!/b/dLYAAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "推荐移门",
        xiangxi: ""
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah26f0ky/8E0fuLqdDU*eKXtKR0zlcZNSQZa2g.zLT4p6ikpuTLY!/b/dDQBAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "推荐移门",
        xiangxi: ""
      }
    ],
    cailiao:[
      {
        url:"https://m.qpic.cn/psb?/V14JKMah15DWjG/m0tIV40GRzeC2ZHILG6GhKWuXwTuCqoyirn18DIuceg!/b/dIMAAAAAAAAA&bo=cAg4BAAAAAARB3Q!&rf=viewer_4",
        name:"推荐材料",
        xiangxi:""
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah15DWjG/UCZRxHu15FgnrESzu1pDe2bf7EqXN98HEFo50MBMUXc!/b/dLYAAAAAAAAA&bo=cAg4BAAAAAARF2Q!&rf=viewer_4",
        name: "推荐材料",
        xiangxi: ""
      } 
    ],
    aid:0,
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
  toxiangqing:function(e){
    this.setData({
      aid:e.currentTarget.dataset.index,
      xiang:e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/xiangqing/xiangqing?index=' + this.data.aid + "&reshousuo=" + encodeURIComponent(JSON.stringify(this.data.xiang)),
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