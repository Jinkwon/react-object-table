# react-object-table-viewer
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
  return <>
    <ReactObjectTableViewer data={{
      hello: 'world',
      abc: 123,
      object: {
        a: 1,
        b: 2,
      },
      array: ['1', '2', '3'],
      objectArray: [{
        a: 1,
      }, {
        b: 2
      }]
    }}/>
  </>
};
```
