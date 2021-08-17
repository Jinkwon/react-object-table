import React from 'react';
var ReactObjectTableViewer = function (props) {
    return (React.createElement("table", { className: '' },
        React.createElement("tbody", { style: {
                userSelect: 'text',
                cursor: 'text',
            } }, Object.keys((props === null || props === void 0 ? void 0 : props.data) || {}).map(function (k, key) { return (React.createElement("tr", { key: key },
            React.createElement("td", { style: {
                    fontWeight: 'bold',
                    marginRight: 10,
                } }, k),
            React.createElement("td", { style: {
                    minWidth: '90px',
                    paddingLeft: '10px',
                    maxWidth: '150px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                } }, "" + (props === null || props === void 0 ? void 0 : props.data[k])))); }))));
};
export default ReactObjectTableViewer;
