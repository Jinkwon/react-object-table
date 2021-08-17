import React, {
  FC,
  ReactNode
} from 'react';
import ReactObjectTableViewer from '../src';
import packages from '../package.json';
import CodeBlock from './components/CodeBlock';

interface PropTypes {
  children?: ReactNode;
}

const index: FC<PropTypes> = (props: PropTypes) => {
  const data = {
    hello: 'world',
    abc: 123,
    array: ['1', '2', '3'],
  };

  return <>
    <h1>react-object-table-viewer {packages.version}</h1>

    <h2>How to use</h2>
    <div>
      <a
        href="https://github.com/jinkwon/react-object-table-viewer">https://github.com/jinkwon/react-object-table-viewer</a>
    </div>
    <h3>Example</h3>


    <ReactObjectTableViewer
      className={'table'}
      layout={'horizontal'}
      style={{
        fontSize: '20px',
      }}
      data={data} />

    <CodeBlock>{`
<ReactObjectTableViewer
  style={{
    fontSize: '12px',
  }}
  data={data} />
    `}</CodeBlock>
  </>;
};

export default index;
