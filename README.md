# yto-jsc components

## 使用说明

``` bash
# install dependencies

npm install yto-jsc -save

# 日期组件依赖于jsc 故需要在html中引入如下资源

<link rel="stylesheet" href="//jscapp.yto56.com.cn:8081/jscPackageApp/yto-package.css"/>

<script type="text/javascript" src="//jscapp.yto56.com.cn:8081/jscPackageApp/yto-package.js"></script>

本组件库已做适配，项目中不需要针对本组件库再次适配


```

### 组件列表
<br/>

| 组件名    | 标签名     | 参数        | 事件       |
| :--------| :-----------| :----------| :---------|
| 按钮组   | jsc-btn     | <br> sepGrop: 按钮文案数组 <br><br> type: isSepret,noSepret,scrollX,titBt <br><br> value: 绑定值 <br><br>| toggleTab: 点击事件(item,index) |
| 标签组   | jsc-label   | <br>search: trur/false 是否包含模糊搜索 <br><br> fuzzyData: 模糊搜索结果项 | search: 搜索事件(搜索值)<br><br> fuzzyClear:清空模糊搜索 <br><br> choseFuzzy: 选中模糊搜索匹配项 |
| 日期   | jsc-time   | <br> isLink: true/false <br><br> dateType: day/month/year/customer <br><br> dateVal: 绑定值 <br><br> endDate: 结束日期 <br><br>| confirm: 确认事件 |
| 滚动   | jsc-scroller   | <br> isLoading: true/false <br><br> hasMore: true/false <br><br> disabledScroll: true/false <br><br> nodate: true/false <br><br> | scrollLoad: 滚动事件 |
| 表格   | jsc-table   | <br> tableData: Array <br><br> columns: Array <br><br> emptyText: String <br><br> serverSort: true/false <br><br> isEmptyShow:true/false <br><br> columnCellClassName:Function <br><br>| sort-change: 排序事件 <br><br> row-click:单元格点击事件 |
