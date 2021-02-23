import './model';
import React from 'react';
import { Counter } from './Counter';
import { CounterTip } from './CounterTip';

export default () => {
  return (
    <div>
      <h1> I am counter2</h1>
      <Counter />
      <CounterTip />
    </div>
  );
};
