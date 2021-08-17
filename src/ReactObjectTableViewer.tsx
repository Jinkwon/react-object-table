import React, { FC } from 'react';

interface PropTypes {
  data?: Record<string, unknown>;
}

const ReactObjectTableViewer: FC<PropTypes> = (props: PropTypes) => {
  return (
    <table
      className={''}
    >
      <tbody
        style={{
          userSelect: 'text',
          cursor: 'text',
        }}
      >
      {Object.keys(props?.data || {}).map((k, key) => (
        <tr key={key}>
          <td
            style={{
              fontWeight: 'bold',
              marginRight: 10,
            }}
          >{k}</td>
          <td
            style={{
              minWidth: '90px',
              paddingLeft: '10px',
              maxWidth: '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >{`${props?.data[k]}`}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default ReactObjectTableViewer;
