import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { dispatch } from 'concent';
import * as rd from '../model/reducer';
import { St } from '../model/meta';
import { Counter } from '../Counter';

// 组件实例
let ins = null as unknown as ReactWrapper;

/**
 * @author fantasticsoul
 */
describe('Counter Render', () => {
  const getInsValue = () => {
    const valueWrap = ins.find('span').at(0);
    return parseInt(valueWrap.text(), 10);
  };

  const testIncrementBtnAction = (expectedValue: number) => {
    const incBtnWrap = ins.find('button').at(0);
    incBtnWrap.simulate('click');
    const actualValue = getInsValue();
    expect(actualValue === expectedValue).toBeTruthy();
  };

  beforeAll(() => {
    ins = mount(<Counter />);
  });

  test('generate AllocateGroup snapshot', () => {
    expect(ins).toMatchSnapshot();
  });

  test('should have 5 buttons', () => {
    const btnWrap = ins.find('button');
    expect(btnWrap.length === 5).toBeTruthy();
  });

  test('mr.increment should work', async () => {
    // const { value } = await ccReducer.Counter.increment(null, { silent: true });
    // or
    const { value } = await dispatch<St>(rd.increment, null, { silent: true });
    testIncrementBtnAction(value);
  });

});