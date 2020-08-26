<template>
    <div class="">
        <div class="group-label flx-ce-bet re-after-line">
            <div class="title-sty">
                <i></i>
                <slot name="title">默认</slot>
            </div>
            <slot name="right">

            </slot>
            <div v-if="search"
                class="fuzzy-search flx-ce-bet">
                <img
                    src="../../assets/img/search_icon.png"
                    class="search-icon"
                    @click="searchKey">
                <input v-model="searchVal"
                    placeholder="输入组织">
            </div>
        </div>
        <div class="fuzzy-contents re-after-line"
            v-if="fuzzyData&&fuzzyData.length>0">
            <ul>
                <li v-for="(item,index) in fuzzyData"
                    :key="index"
                    @click="choseFuzzy(item)"
                    class="flx-ce-sta fuzzy-clm"
                >{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import '../../assets/common.scss'
export default {
    name: 'jsc-label',
    props: ['search', 'fuzzyData'],
    data () {
        return {
            searchVal: ''
        };
    },
    watch: {
        searchVal () {
            if (this.searchVal) {
                this.$emit('search', this.searchVal);
            } else {
                this.$emit('fuzzyClear');
            }
        }
    },
    methods: {
        searchKey (val) {
            this.$emit('search', this.searchVal);
        },
        clear () {
            this.searchVal = '';
            this.$emit('fuzzyClear');
        },
        choseFuzzy (item) {
            this.$emit('choseFuzzy', item);
        }
    }
};
</script>
<style lang="scss" scoped>
.group-label {
    width: 100%;
    height: 80px;
    padding: 0 20px 0 30px;
    font-size: 30px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    background: #fff;
    color: rgba(51, 51, 51, 1);
    i {
        list-style: none;
        height: 30px;
        margin-right: 10px;
        border-left: 4px solid #2482fc;
    }
    .title-sty {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
    }
    .fuzzy-search {
        width: 244px;
        height: 44px;
        background: rgba(242, 243, 244, 1);
        border-radius: 22px;
        padding: 0 12px;
        .search-icon {
            width: 32px;
            height: 32px;
        }
        input {
            // width:100%;
            width: 1px;
            flex-grow: 1;
            height: 100%;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #a9a9a9;
            margin-left: 6px;
            list-style: none;
            border: none;
            outline: none;
            background: none;
            color: #333;
        }
        .clear-icon {
            width: 30px;
            height: 32px;
        }
    }
}
.fuzzy-contents {
    width: 100%;
    .fuzzy-clm {
        padding: 20px 0 20px 30px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        background: #fff;
    }
}
</style>
