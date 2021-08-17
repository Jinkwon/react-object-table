import React, {
  CSSProperties,
  FC
} from 'react';

export type TableViewerLayoutType = 'vertical' | 'horizontal';

export interface PropTypes {
  data?: Record<string, unknown>;
  style?: CSSProperties;
  keyStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  className?: string;
  layout?: TableViewerLayoutType;
}

const ReactObjectTableViewer: FC<PropTypes> = (props: PropTypes) => {
  const opt = {
    layout: 'vertical',
    ...props,
  };

  const data = opt.data;
  const keys: string[] = Object.keys(data || {}) || [];

  return (
    <table
      className={opt.className}
      style={{
        ...opt.style,
      }}
    >
      <tbody>
      {opt.layout === 'vertical' && keys.map((k, key) => (
        <tr key={key}>
          <td
            style={{
              fontWeight: 'bold',
              marginRight: 10,
              ...opt.keyStyle,
            }}
          >{k}</td>
          <td
            style={{
              whiteSpace: 'nowrap',
              ...opt.valueStyle,
            }}
          >{`${data[k]}`}</td>
        </tr>
      ))}

      {opt.layout === 'horizontal' && (
        <>
          <tr>
            {keys.map((k, key) => (<td
              key={key}
              style={{
                fontWeight: 'bold',
                marginRight: 10,
                ...opt.keyStyle,
              }}
            >{k}</td>))}
          </tr>
          <tr>
            {keys.map((k, key) => (<td
              key={key}
              style={{
                whiteSpace: 'nowrap',
                ...opt.valueStyle,
              }}
            >{`${data[k]}`}</td>))}
          </tr>
        </>
      )}
      </tbody>
    </table>
  );
};

export default ReactObjectTableViewer;
