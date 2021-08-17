import React, {
  CSSProperties,
  FC
} from 'react';
import { TableViewerLayoutType } from './types';

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
    layout: 'vertical' as TableViewerLayoutType,
    ...props,
  };

  const data: any = opt.data;
  const keys: string[] = Object.keys(data || {}) || [];

  return (
    <table
      className={opt.className}
      style={{
        ...opt.style,
      }}
    >
      {opt.layout === 'vertical' && (
        <tbody>
        {keys.map((k, key) => {
          const val: any = data[k];
          const isObject: boolean = typeof val === 'object';

          return <tr key={key}>
            <th
              style={{
                fontWeight: 'bold',
                marginRight: 10,
                ...opt.keyStyle,
              }}
            >{k}</th>
            {isObject && <td><ReactObjectTableViewer {...opt} data={val}/></td>}
            {!isObject && <td
              style={{
                whiteSpace: 'nowrap',
                ...opt.valueStyle,
              }}
            >{`${val}`}</td>}
          </tr>;
        })}
        </tbody>
      )}

      {opt.layout === 'horizontal' && (
        <>
          <thead>
          {keys.map((k, key) => (<th
            key={key}
            style={{
              fontWeight: 'bold',
              marginRight: 10,
              ...opt.keyStyle,
            }}
          >{k}</th>))}
          </thead>
          <tbody>
          {keys.map((k, key) => {
            const val: any = data[k];
            const isObject: boolean = typeof val === 'object';

            return <>
              {isObject && <td><ReactObjectTableViewer {...opt} data={val}/></td>}
              {!isObject && <td
                key={key}
                style={{
                  whiteSpace: 'nowrap',
                  ...opt.valueStyle,
                }}
              >{`${val}`}</td>}
            </>;
          })}
          </tbody>
        </>
      )}
    </table>
  );
};

export default ReactObjectTableViewer;
