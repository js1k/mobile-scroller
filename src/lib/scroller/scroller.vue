<template>
    <div class="scroll-com"
        @scroll="scrollLoad"
        ref="scroll"
        :class="{'disableScroll':disabledScroll}">
        <slot></slot>
        <div v-if="isLoading"
            class="loading flx-ce-ce">正在加载中</div>
        <div v-if="!hasMore&&isLoading==false&&!nodate"
            class="loading flx-ce-ce">我是有底线的...</div>
    </div>
</template>
<script>
// import {throttle} from '../lib/utils.js';
export default {
    name:'jsc-scroller',
    props: ['isLoading', 'hasMore', 'disabledScroll', 'nodate'],
    data () {
        return {
            canScroll: true
        };
    },
    mounted () {

    },
    methods: {
        scrollLoad () {
            let _this = this;
            let el = this.$refs.scroll;
            if (!this.hasMore) return;
            if (el.scrollHeight - 100 < el.scrollTop + el.offsetHeight) {
                if (!this.canScroll) return;
                this.canScroll = false;
                this.$emit('scrollLoad');
                let tempT = setTimeout(function () {
                    _this.canScroll = true;
                    clearTimeout(tempT);
                }, 1000);
            };
        }
    }
};
</script>
<style lang="scss">
.scroll-com{
    width:100%;
    height:100%;
    overflow: scroll;
    .loading{
        height:80px;
        font-size:20px;
        font-family:MicrosoftYaHei;
        color:rgba(153,153,153,1);
    }
}
.disableScroll{
    overflow: hidden;
}
</style>
