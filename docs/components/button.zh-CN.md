---
title: 按钮
nav:
  title: 组件
group:
  title: 基础组件
demo:
  inline: true
  defaultShowCode: true
---

# 演示

## 风格类型

按钮的 type 分别为 default、primary、info、success、warning 和 danger。

```jsx
/**
 * 
 * defaultShowCode: false
*/
import React from 'react';
import '@one-ui/button'


export default () => <div style={{}}>
    <one-button style={{marginRight: '10px'}}>default</one-button>
    <one-button type="primary" style={{marginRight: '10px'}}>primary</one-button>
    <one-button type="info" style={{marginRight: '10px'}}>info</one-button>
    <one-button type="warning" style={{marginRight: '10px'}}>warning</one-button>
    <one-button type="success" style={{marginRight: '10px'}}>success</one-button>
    <one-button type="danger">danger</one-button>
</div>;
```

## 禁用

你可以通过设置 disabled 来禁用按钮。

```jsx
import React from 'react';
import '@one-ui/button'

export default () => <div>
    <one-button  disabled style={{marginRight: '10px'}}>点不到</one-button>
    <one-button disabled type="primary" style={{marginRight: '10px'}}>点不到</one-button>
    <one-button disabled type="info" style={{marginRight: '10px'}}>点不到</one-button>
    <one-button disabled type="warning" style={{marginRight: '10px'}}>点不到</one-button>
    <one-button disabled type="success" style={{marginRight: '10px'}}>点不到</one-button>
    <one-button disabled type="danger">点不到</one-button>
</div>;
```
## 透明背景

你可以通过设置 ghost 来禁用按钮。

```jsx
import React from 'react';
import '@one-ui/button'

export default () => <div>
    <one-button attr-type="submit"  style={{marginRight: '10px'}}>点不到</one-button>
    <one-button attrType="submit" type="primary" ghost style={{marginRight: '10px'}}>点不到</one-button>
    <one-button type="info" ghost style={{marginRight: '10px'}}>点不到</one-button>
    <one-button type="warning" ghost style={{marginRight: '10px'}}>点不到</one-button>
    <one-button type="success" ghost style={{marginRight: '10px'}}>点不到</one-button>
    <one-button type="danger" ghost>点不到</one-button>
</div>;
```
## 虚线

你可以通过设置 dashed 来虚线按钮。

```jsx
import React from 'react';
import '@one-ui/button'

export default () => <div>
    <one-button dashed style={{marginRight: '10px'}}>default</one-button>
    <one-button dashed type="primary" style={{marginRight: '10px'}}>primary</one-button>
    <one-button dashed type="info" style={{marginRight: '10px'}}>info</one-button>
    <one-button dashed type="warning" style={{marginRight: '10px'}}>warning</one-button>
    <one-button dashed type="success" style={{marginRight: '10px'}}>success</one-button>
    <one-button dashed type="danger">danger</one-button>
</div>;
```

<h1>API</h1>

## Button Props

| 名称     | 类型                                                     | 默认值    | 说明         |
|----------|----------------------------------------------------------|-----------|--------------|
| type     | 'default' \| 'success' \| 'primary' \| 'info' \| 'warning' \| 'danger' | 'default' | 排印类型     |
| disabled | boolean                                                  | false     | 按钮是否禁用 |
