<template>
    <div>
        <div class="time-label flx-ce-end"
            :class="{'link-sty':isLink}"
            @click="toggleTime">
            <slot>test 2020</slot>
        </div>
        <!-- 日期选择器-日 -->
        <date-picker ref="pickerday"
                    date-type="date"
                    year-format="{value}年"
                    month-format="{value}月"
                    date-format="{value}日"
                    :value="dateVal"
                    :end-date="endDate||new Date()"
                    v-if="dateType == 'day'"
                    @confirm="confirmDate">
        </date-picker>
        <!-- 日期选择器-月 -->
        <date-picker ref="pickermonth"
                    date-type="month"
                    year-format="{value}年"
                    month-format="{value}月"
                    date-format=""
                    :value="dateVal"
                    :end-date="endDate"
                    v-if="dateType == 'month'"
                    @confirm="confirmDate">
        </date-picker>
        <!-- 日期选择器-年 -->
        <date-picker ref="pickeryear"
                     date-type="year"
                     year-format="{value}年"
                     month-format=""
                     date-format=""
                     :value="dateVal"
                     :end-date="endDate"
                     v-if="dateType === 'year'"
                     @confirm="confirmDate">
        </date-picker>
        <!-- 日期选择器-自定义 -->
        <date-picker ref="pickercustom"
                    date-type="custom"
                    year-format="{value}年"
                    month-format="{value}月"
                    date-format="{value}日"
                    :value="dateVal"
                    :stepDay="stepDay"
                    :end-date="endDate"
                    v-if="dateType === 'custom'"
                    @confirm="confirmDate">
        </date-picker>
    </div>
</template>
<script>
import datePicker from '@/components/datePicker';
import '../../assets/common.scss'
export default {
    name: 'jsc-time',
    components: {
        datePicker
    },
    // isLink 是否是链接 链接标记文案为颜色
    props: ['isLink', 'dateType', 'dateVal', 'endDate', 'stepDay'],
    data () {
        return {
            freshDate: new Date()
        };
    },
    mounted () {

    },
    methods: {
        // 切换日期形式 年月 年
        toggleTime () {
            if (!this.isLink) return;
            this.$emit('togTime');
            this.$nextTick(() => {
                this.$refs['picker' + this.dateType].open();
            });
        },
        // 选择时间
        confirmDate (val) {
            this.$emit('confirmDate', val);
            this.$refs['picker' + this.dateType].close();
        }
    }
};
</script>
<style lang="scss" scoped>
.time-label{
    width:100%;
    padding: 20px 30px;
    font-size:26px;
    color:rgba(153,153,153,1);
}
.link-sty{
    color:#2482FC
}
</style>
