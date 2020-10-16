<template>
    <div>
        <div class="time-label flx-ce-end"
            :class="{'link-sty':isLink}"
            @click="toggleTime">
            <slot>test 2020</slot>
        </div>
        <yto-date-range ref="picker"
                :dateType="dateType=='day'?'date':dateType"
                :value="dateVal"
                @confirm="confirmDate"></yto-date-range>
    </div>
</template>
<script>
export default {
    name: 'jsc-time',
    // isLink 是否是链接 链接标记文案为颜色
    props: ['isLink', 'dateType', 'dateVal', 'endDate', 'stepDay'],
    data () {
        return {

        };
    },
    mounted () {

    },
    methods: {
        // 切换日期形式 年月 年
        toggleTime () {
            if (!this.isLink) return;
            this.$emit('togTime');
            this.$refs['picker'].open();
        },
        // 选择时间
        confirmDate (val) {
            this.$emit('confirmDate', val);
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
