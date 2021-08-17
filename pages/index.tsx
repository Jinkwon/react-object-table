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
    <h2>Example</h2>

    <h3>Properties</h3>
    <CodeBlock>
{`
export interface PropTypes {
  data?: Record<string, unknown>;
  style?: CSSProperties;
  keyStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  className?: string;
  layout?: TableViewerLayoutType;
}

<ReactObjectTableViewer
  layout={'vertical'}
  style={{
    border: '1px solid #ccc',
  }}
  keyStyle={{
    color: '#ff0000'
  }}
  valueStyle={{
    color: '#00ff00'
  }}
  data={data}
/>

`}
  </CodeBlock>

  <h2>Horizontal</h2>
  <ReactObjectTableViewer
    layout={'horizontal'}
    style={{
      border: '1px solid #ccc',
    }}
    keyStyle={{
      color: '#ff0000'
    }}
    valueStyle={{
      color: '#00ff00'
    }}
    data={data} />

  <h2>Vertical</h2>
  <ReactObjectTableViewer
    layout={'vertical'}
    style={{
      border: '1px solid #ccc',
    }}
    keyStyle={{
      color: '#ff0000'
    }}
    valueStyle={{
      color: '#00ff00'
    }}
    data={data} />
</>;
};

export default index;
