# JSC components

## Build Setup

``` bash
# install dependencies

npm install yto-jsc -save

# 日期组件依赖于jsc

故需要在html中引入如下资源

<link rel="stylesheet" href="//jscapp.yto56.com.cn:8081/jscPackageApp/yto-package.css"/>

<script type="text/javascript" src="//jscapp.yto56.com.cn:8081/jscPackageApp/yto-package.js"></script>

本组件库已做适配，项目中不需要针对本组件库再次适配

```

### 组件列表

| 组件名    | 标签名     | 参数        | 事件       |
| :--------| :-----------| :----------| :---------|
| 按钮组   | jsc-btn     | sepGrop: 按钮文案数组 <br> type: (按钮类型)isSepret,noSepret,scrollX,titBt <br> value:绑定值(下标) | toggleTab: 点击事件(item,index) |
| 标签组   | jsc-label   | search:是否包含模糊搜索 Boolen <br> fuzzyData:模糊搜索结果项 | search: 搜索事件(搜索值)<br> fuzzyClear:清空模糊搜索 <br> choseFuzzy:选中模糊搜索匹配项 |
