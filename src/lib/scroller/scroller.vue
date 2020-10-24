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
export default {
    name: 'jsc-scroller',
    // props: ['isLoading', 'hasMore', 'disabledScroll', 'nodate', 'threshold'],
    props: {
        'isLoading': {
            type: Boolean,
            default: false
        },
        'hasMore': {
            type: Boolean,
            default: true
        },
        'disabledScroll': {
            type: Boolean,
            default: false
        },
        'nodate': {
            type: Boolean,
            default: false
        },
        'threshold': {
            type: Number,
            default: 20
        }
    },
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
            if((el.scrollTop + el.offsetHeight==el.scrollHeight)&&this.hasMore){
                el.scrollTop-=30
                return
            }
            if (!this.hasMore||!this.canScroll) return;
            if (el.scrollHeight - this.threshold < el.scrollTop + el.offsetHeight) {
                this.canScroll = false;
                this.$emit('scrollLoad');
                if(this.hasMore){
                    el.scrollTop-=30
                }
                let tempT = setTimeout(function () {
                    _this.canScroll = true;
                    clearTimeout(tempT);
                }, 500);
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
