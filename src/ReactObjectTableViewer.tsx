import React, { FC } from 'react';

export type TableViewerLayoutType = 'vertical' | 'horizontal';

interface PropTypes {
  data?: Record<string, unknown>;
  style?: any;
  className?: string;
  layout?: TableViewerLayoutType;
}

const ReactObjectTableViewer: FC<PropTypes> = (props: PropTypes) => {
  return (
    <table
      style={{
        ...props.style,
      }}
      className={props.className}
    >
      <tbody>
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
