<template>
    <div class="jsc-button-group">
        <div
            class="seprate-bt flx-ce-sta"
            v-if="type=='isSepret'"
        >
            <div
                v-for="(item,index) in sepGrop"
                :key="index"
                class="sep-item flx-ce-ce"
                :class="{'active-sep':index==curIndex}"
                @click="toggleTab(item,index)"
            >{{item}}</div>
        </div>
        <div
            class="flx-ce-sta none-sep"
            v-if="type=='noSepret'"
        >
            <div
                v-for="(item,index) in sepGrop"
                :key="index"
                class="sep-item flx-ce-ce"
                :class="{'active-sep':index==curIndex}"
                @click="toggleTab(item,index)"
            >{{item}}</div>
        </div>
        <div
            class="scroll-btn-group flx-ce-bet"
            v-if="type=='scrollX'"
        >
            <div
                v-for="(item,index) in sepGrop"
                :key="index"
                class="sep-item flx-ce-ce"
                :class="{'active-sep':index==curIndex}"
                @click="toggleTab(item,index)"
            >{{item}}</div>
        </div>
    </div>
</template>
<script>
import '../../assets/common.scss'
export default {
    name: 'jsc-btn',
    props: ['sepGrop', 'isSepret', 'value', 'type'],
    data () {
        return {
            curIndex: this.value || 0
        };
    },
    watch: {
        value (newVal) {
            this.curIndex = newVal;
        },
        curIndex (newVal) {
            // this.$emit('toggleTab', this.sepGrop[newVal], newVal);
        }
    },
    created () {

    },
    methods: {
        toggleTab (item, index) {
            this.curIndex = index;
            this.$emit('toggleTab', item, this.curIndex);
        }
    }
};
</script>
<style lang="scss" scoped>
.jsc-button-group {
    width: 100%;
    .seprate-bt {
        width: 100%;
        .sep-item {
            // flex-grow: 1;
            flex: 1;
            margin-right: 30px;
            height: 68px;
            color: #666;
            background: #fff;
            border-radius: 4px;
            font-size: 28px;
            border: 0.5px solid #d2d2d2;
        }
        .active-sep {
            background: rgba(36, 130, 252, 1);
            color: #fff;
            border: none;
        }
        .sep-item:last-of-type {
            margin-right: 0;
        }
    }
    .none-sep {
        width: 100%;
        .sep-item {
            flex-grow: 1;
            height: 68px;
            margin-right: 0;
            background: none;
            color: #2482fc;
            border: 1px solid rgba(36, 130, 252, 1);
            border-right: none;
            border-radius: none !important;
            font-size: 28px;
        }
        .active-sep {
            background: rgba(36, 130, 252, 1);
            color: rgba(255, 255, 255, 1);
        }
        .sep-item:last-of-type {
            border-right: 1px solid rgba(36, 130, 252, 1);
        }
        .sep-item:first-of-type {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        .sep-item:last-of-type {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    .scroll-btn-group {
        // width:100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow-x: scroll;
        .sep-item {
            flex-shrink: 0;
            background: rgba(254, 255, 255, 1);
            border-radius: 34px;
            border: 2px solid rgba(233, 233, 233, 1);
            padding: 10px 12px;
            font-size: 28px;
            // font-family:PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-right: 12px;
        }
        .active-sep {
            color: rgba(255, 255, 255, 1);
            background: rgba(36, 130, 252, 1);
            border: none;
        }
    }
}
::-webkit-scrollbar {
    display: none;
}
</style>
