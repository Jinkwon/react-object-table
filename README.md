# react-object-table-viewer
Object render to table viewer
### [Live Demo](https://jinkwon.github.io/react-object-table-viewer)

# Installation
```shell
npm install -- save react-object-table-viewer
```

or

```shell
yarn add react-object-table-viewer
```

# Usage

```javascript
import ReactObjectTableViewer from 'react-object-table-viewer';

const App = () => {
  const data = {
    hello: 'world',
    abc: 123,
    array: ['1', '2', '3'],
  };

  return <>
    <ReactObjectTableViewer
      style={{
        fontSize: '14px',
      }}
      data={data}/>
  </>
};
```
