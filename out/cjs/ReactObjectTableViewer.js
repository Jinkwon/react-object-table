"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ReactObjectTableViewer = function (props) {
    return (react_1.default.createElement("table", { className: '' },
        react_1.default.createElement("tbody", { style: {
                userSelect: 'text',
                cursor: 'text',
            } }, Object.keys((props === null || props === void 0 ? void 0 : props.data) || {}).map(function (k, key) { return (react_1.default.createElement("tr", { key: key },
            react_1.default.createElement("td", { style: {
                    fontWeight: 'bold',
                    marginRight: 10,
                } }, k),
            react_1.default.createElement("td", { style: {
                    minWidth: '90px',
                    paddingLeft: '10px',
                    maxWidth: '150px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                } }, "" + (props === null || props === void 0 ? void 0 : props.data[k])))); }))));
};
exports.default = ReactObjectTableViewer;
