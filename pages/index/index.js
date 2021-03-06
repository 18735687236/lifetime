// // pages/index/index.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     date: '2016-09',
//   },
//   bindDateChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       date: e.detail.value
//     })
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })

Page({
  data: {
    birthday: 0,
    year: 0,
    month: 0,
    distance: 0,
    end: '',
    percent: 0
  },
  onLoad(options) {
    // 在这里获取路由传参，赋给this
  },
  onReady() {
    // 不怎么使用
  },
  onShow() {
    // 统一在这里发起网络请求和一些初始化的工作
    let now = new Date();
    this.setData({
      end: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    })
  },
  onHide() {

  },
  onUnload() {

  },
  changeBirthday(e) {
    console.log('e...', e);
    let value = e.detail.value.split('-');
    let distance = this.getDistanceMonth(e.detail.value, this.data.end);

    this.setData({
      birthday: e.detail.value,
      year: value[0],
      month: value[1],
      distance,
      percent: (distance / 9).toFixed(0)
    })
  },
  // pre 2020-02 now 2019-12
  getDistanceMonth(pre, now) {
    let preArr = pre.split('-'),
      nowArr = now.split('-');
    return Number((nowArr[0] - preArr[0]) * 12) + Number(nowArr[1] - preArr[1])
  },
  clear() {
    let now = new Date();
    this.setData({
      birthday: 0,
      month: String(now.getMonth() + 1).padStart(2, '0'),
      year: now.getFullYear(),
      distance: 0
    })
  },
  goDate() {
    console.log('go date');
    wx.switchTab({
      url: '/pages/date/index', complete: (res) => {
        console.log('res...', res);
      }
    });
  }
})
