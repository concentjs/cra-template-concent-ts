// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// @ts-ignore
require('@testing-library/jest-dom/extend-expect');
// import '@testing-library/jest-dom/extend-expect';

const { run } = require('concent');
const models = require('./models');
const { act } = require('react-dom/test-utils');

run(models, {
  alwaysRenderCaller: true,
  log: false, // jest执行时，不打印concent内部的日志输出
  act, // 配合jest执行setState时能触发组件重渲染，see https://reactjs.org/docs/test-utils.html#act
});