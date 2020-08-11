import btn from './button/button.vue'
import grouplabel from './groupLabel/groupLabel.vue'
import timeLabel from './timeLabel/timeLabel.vue'
// import VEcharts from './VEcharts/VEcharts.vue'
import YtoTable from './YtoTable/YtoTable.vue'
import scroller from './scroller/scroller.vue'
const components = {
    btn,
    grouplabel
}
const jsc = {}
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('yyl-npm-practice', btn)
    // window.Vue.component('yyl-npm-practice', groupLabel)
}
//这样就可以使用Vue.use进行全局安装了。
jsc.install = function (Vue) {
    // for (let item in components) {
    //     Vue.component(item.name, item)
    // }
    Vue.component(btn.name, btn)
    Vue.component(grouplabel.name, grouplabel)
    Vue.component(timeLabel.name, timeLabel)
    // Vue.component(VEcharts.name, VEcharts)
    Vue.component(YtoTable.name, YtoTable)
    Vue.component(scroller.name, scroller)
}

export default jsc
