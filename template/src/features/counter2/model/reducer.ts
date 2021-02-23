import { St } from './state';
import { IAC } from './meta';
import { VoidPayload } from 'types/store';

const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));

export function incrementBigValue(payload: VoidPayload, moduleState: St): Partial<St> {
  return { bigValue: moduleState.bigValue + 50 };
}

export function incrementOne(payload: VoidPayload, moduleState: St): Partial<St> {
  return { value: moduleState.value + 1 };
}

export function decrementOne(payload: VoidPayload, moduleState: St): Partial<St> {
  return { value: moduleState.value - 1 };
}

export function increment(payload: VoidPayload, moduleState: St): Partial<St> {
  return { value: moduleState.value + moduleState.toInc };
}

export async function incrementAsync(payload: VoidPayload, moduleState: St, ac: IAC): Promise<Partial<St>> {
  await delay();
  // or just write ac.dispatch of return
  // await ac.dispatch(incrementByAmount, amount);
  return { value: moduleState.value + moduleState.toInc };
}

export function foo() {
  console.log('call foo');
}

export function clear() {
  console.log('call clear');
}
