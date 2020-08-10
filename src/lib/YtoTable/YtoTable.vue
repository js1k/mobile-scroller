<template>
    <div class="yto-table">
        <!-- <sticky class="sticky"> -->
            <div class="yto-head">
                <div v-for="(col, index) in columns_"
                     class="yto-head-th"
                     :key="index"
                     @click="sortChange(col, index)">
                    <div class="yto-head-title">
                        <div class="head-txt">
                            <span>{{ col.title }}{{(col.subTitle)}}</span>
                            <!-- <span class="yto-head-sub-title">{{ col.subTitle }}</span> -->
                            <span v-if="col.orderBy !== undefined && col.orderBy !== null"
                                class="sort-wrap">
                                    <!-- 升序 -->
                                    <template v-if="col.orderBy == 'asc'">
                                        <img src="../../assets/img/icon_sort_arr.png">
                                        <img src="../../assets/img/icon_unsort_arr.png">
                                    </template>
                                    <!-- 降序 -->
                                    <template v-else-if="col.orderBy == 'desc'">
                                        <img src="../../assets/img/icon_unsort_arr.png"
                                            class="sort-icon-reserve">
                                        <img src="../../assets/img/icon_sort_arr.png"
                                            class="sort-icon-reserve">
                                    </template>
                                    <!-- 无序 -->
                                    <template v-else>
                                        <img src="../../assets/img/icon_unsort_arr.png"
                                            class="sort-icon-reserve">
                                        <img src="../../assets/img/icon_unsort_arr.png">
                                    </template>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </sticky> -->

        <template v-if="data && data.length">
            <div v-for="(row, index) in data"
                 class="yto-row"
                 :key="index">
                <div v-for="(col, index_) in columns_"
                     class="yto-col"
                     :class="columnCellClassName(row, index, col.field)"
                     :key="index_"
                     @click="cellClick(index, row, index_, columns_[index_])">
                     <span v-if="!col.filter">
                        {{ col.formatter ? col.formatter(row, index, col.field) : row[col.field] }}
                     </span>
                     <span v-else></span>
                </div>
            </div>
        </template>

        <div class="yto-empty" v-if="(!data || data.length==0)">{{ emptyText }}</div>
    </div>
</template>

<script>
import merge from 'lodash.merge';
// import { Sticky } from 'vux';
import '../../assets/common.scss'

export default {
    name: 'jsc-yto-table',
    props: {
        // 表格数据
        tableData: {
            type: Array,
            default: () => []
        },
        // 定义列属性
        columns: {
            type: Array,
            default: () => []
        },
        // 数据为空时的显示文本
        emptyText: {
            type: String,
            default: () => '暂无数据'
        },
        // 是否开启服务端排序
        serverSort: {
            type: Boolean,
            default: () => false
        },
        isEmptyShow: {
            type: Boolean,
            default: () => false
        },
        // 单元格样式
        columnCellClassName: {
            type: Function,
            default: (rowData, rowIndex, columnName) => {
                return 'count-spe-class column-cell-class-name';
            }
        }
    },
    components: {
        // Sticky
    },

    data () {
        return {
            data: [],
            newColumn: this.columns,
            temp: ''
        };
    },
    created () {
    },
    computed: {
        columns_ () {
            return this.columns.map((item, index) => {
                let orderBy;
                if (index !== 0) orderBy = '';
                if (index === 1) orderBy = 'desc';
                return {
                    orderBy: item.hasOwnProperty('orderBy') ? item.orderBy : orderBy,
                    title: item.title,
                    subTitle: item.subTitle,
                    field: item.field,
                    formatter: item.formatter,
                    filter: item.filter
                    // ...item
                };
            });
        }
    },
    watch: {
        tableData: {
            handler (val) {
                this.data = merge([], val);
            }
        }
    },

    methods: {
        // 排序条件改变
        sortChange (col) {
            if (col.orderBy === undefined || col.orderBy === null) return;
            // 排序条件
            let sortParams = {};
            for (let item of this.columns_) {
                if (item.orderBy !== undefined && item.orderBy !== null) {
                    if (item.field !== col.field) {
                        item.orderBy = '';
                    } else {
                        col.orderBy = col.orderBy === 'asc' ? 'desc' : 'asc';
                    }
                    sortParams[item.field] = item.orderBy;
                }
            }
            this.$emit('sort-change', sortParams);
            // 前端排序
            if (this.serverSort) return;
            let sortArr = Object.assign([], this.data);
            // 对数组进行排序
            for (let key in sortParams) {
                if (sortParams[key]) {
                    sortArr.sort((a, b) => {
                        return sortParams[key] === 'asc' ? a[key] - b[key] : b[key] - a[key];
                    });
                    break;
                }
            }
            // 分离出含有 fixed 属性和不含有 fixed 属性的子集
            let fixedArr = sortArr.filter(item => {
                return !isNaN(+item.fixed);
            });
            fixedArr.sort((a, b) => {
                return a.fixed - b.fixed;
            });
            let unFixedArr = sortArr.filter(item => {
                return isNaN(+item.fixed);
            });
            for (let index in fixedArr) {
                unFixedArr.splice(fixedArr[index].fixed, 0, fixedArr[index]);
            }
            this.data = unFixedArr;
        },

        // 单元格点击
        cellClick (rowIndex, rowData, columnIndex, column) {
            this.$emit('cell-click', rowIndex, rowData, columnIndex, column);
            this.$emit('row-click', rowIndex, rowData, column);
        }
    }
};
</script>

<style lang="scss" scoped>
.yto-table {
    width: 100%;
    font-size: 26px;
    .sticky {
        // position: sticky !important;
        // top: 0;
    }
    .yto-head {
        display: flex;
        color: #999;
        background: #fff;
        min-height: 80px;
        position: relative;
        .yto-head-th {
            flex: 1;
            margin: 5px 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            .yto-head-title {
                text-align: center;
                display: flex;
                flex-direction: column;
                .yto-head-sub-title {
                    font-size: 18px;
                    color: #bbb;
                }
                .head-txt{
                    display: inline;
                }
            }
            .sort-wrap {
                width: 20px;
                height:8px;
                display: inline-grid;
                vertical-align: super;
                img {
                    width: 20px;
                height:8px;
                    position: relative;
                    &.sort-icon-reserve {
                        transform: rotate(180deg);
                    }
                    &:first-child {
                        margin-bottom: 4px;
                    }
                }
            }
        }
    }
    .yto-row {
        display: flex;
        min-height: 80px;
        padding: 10px 6px;
        align-items: center;
        &:nth-child(2n - 1) {
            background: #f5f5f5;
        }
        &:nth-child(2n) {
            background: #fff;
        }
        .yto-col {
            flex: 1;
            text-align: center;
            padding: 0 5px;
            &.link-content {
                color: #06c !important;
            }
            span{
                word-break: break-all;
            }
        }
    }
    .yto-empty {
        text-align: center;
        height: 80px;
        line-height: 80px;
        color: #999;
    }
}
</style>
