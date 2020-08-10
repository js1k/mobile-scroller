<template>
    <div class="yto-echarts">
        <e-charts class="echarts"
                ref="vueEcharts"
                :options="option"
                auto-resize></e-charts>
    </div>
</template>

<script>
import 'echarts';
import ECharts from 'vue-echarts/components/ECharts';
import merge from 'lodash.merge';
import '../../assets/common.scss'

export default {
    name: 'jsc-v-echarts',
    components: {
        ECharts
    },

    props: {
        options: {
            type: Object,
            default: () => { }
        }
    },

    data () {
        return {
            option_: {
                color: ['#2684FD', '#F32F52'],
                legend: {
                    selectedMode: false,
                    data: [],
                    right: '4%',
                    y: '10px',
                    icon: 'line',
                    itemWidth: 16, // 图例的宽度
                    itemHeight: 10, // 图例的高度
                    textStyle: {
                        fontSize: 11,
                        color: '#999'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        fontSize: 11
                    },
                    extraCssText: 'z-index:999'
                },
                grid: {
                    top: '18%',
                    left: '5%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: [],
                    axisLabel: {
                        showMaxLabel: true,
                        rotate: '30',
                        textStyle: {
                            color: '#999999',
                            fontSize: 11,
                            fontWeight: 400
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    boundaryGap: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#999999'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    minInterval: 1,
                    axisLabel: {
                        show: true,
                        formatter: function (value, index) {
                            // if (value >= 10000) {
                            //     value = value + '/h';
                            // }
                            return value;
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f3f3f3',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#999999'
                        }
                    },
                    offset: 6
                }],
                series: [{
                    name: '',
                    type: 'line',
                    symbol: 'circle',
                    lineWidth: 3,
                    data: [],
                    label: {
                        show: true,
                        rich: {
                            a: {
                                fontStyle: 'oblique'
                            },
                            b: {
                                fontStyle: 'normal'
                            }
                        }
                        // formatter: function (v, index) {
                        //     let value = v.value;
                        // return '{a|' + value + '/%' + '}';
                        // if (value >= 10000) {
                        //     // value = (value / 10000).toFixed(2);
                        //     if (value < 1000) {
                        //         return '{b|' + value + '}';
                        //     } else {
                        //         return '{a|' + value + '}';
                        //     }
                        // } else {
                        //     return '{b|' + value + '}';
                        // }
                        // }
                    }
                }]
            }
        };
    },

    computed: {
        option () {
            let option_ = Object.assign({}, this.option_);
            this.options.series.forEach((item, index) => {
                option_.legend.data.push(item.name);
                option_.series[index] = option_.series[0];
            });
            return merge({}, option_, this.options);
        }
    },
    methods: {
        clear () {
            this.$refs.vueEcharts.clear();
        }
    }
};
</script>

<style lang="scss" scoped>
.echarts {
    width: 100%;
    height: 100%;
}
.yto-echarts{
    z-index: 0;
    >div{
        z-index: 0;
        &:first-child{
            z-index: 0;
        }
        &:last-child{
            z-index: 999;
        }
    }
}
</style>
