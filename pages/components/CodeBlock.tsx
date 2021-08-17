import React, { FC, ReactNode } from 'react';

interface PropTypes {
  children?: ReactNode;
}
const CodeBlock: FC<PropTypes> = (props: PropTypes) => {
  return (<pre style={{
    fontSize: '11px',
    backgroundColor: '#eee',
  }}>
    {props.children}
  </pre>);
};

export default CodeBlock;