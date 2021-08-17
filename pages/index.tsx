import React, {
  FC,
  ReactNode
} from 'react';
import ReactObjectTableViewer from '../src';

interface PropTypes {
  children?: ReactNode;
}

const index: FC<PropTypes> = (props: PropTypes) => {
  return <>
    <h2>react-object-table-viewer</h2>
    <div>
      <a href="https://github.com/jinkwon/react-object-table-viewer">https://github.com/jinkwon/react-object-table-viewer</a>
    </div>
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

  </>;
};

export default index;
