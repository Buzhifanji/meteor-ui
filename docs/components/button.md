---
title: Button
nav:
  title: components
group:
  title: base components
---

# demo

## base button

```jsx
import React from 'react';
import '@one-ui/button'

export default () => <div>
    <one-button style={{marginRight: '10px'}}>default</one-button>
    <one-button type="primary" style={{marginRight: '10px'}}>primary</one-button>
    <one-button type="info" style={{marginRight: '10px'}}>info</one-button>
    <one-button type="warning" style={{marginRight: '10px'}}>warning</one-button>
    <one-button type="success" style={{marginRight: '10px'}}>success</one-button>
    <one-button type="danger" style={{marginRight: '10px'}}>danger</one-button>
</div>;
```

## 