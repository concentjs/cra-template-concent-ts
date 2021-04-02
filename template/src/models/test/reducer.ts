import { St } from './state';
import { IAC } from './meta';
import { VoidPayload } from 'types/store';

const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));

export function changeLabel(label: string, moduleState: St): Partial<St> {
  return { label };
}

export async function asyncChangeLabel(payload: VoidPayload, moduleState: St, ac: IAC): Promise<Partial<St>> {
  await ac.setState({ loading: true });
  await delay(3000);
  return { label: `asynclabel_${Date.now()}`, loading: false };
}

export function foo() {
  console.log('call foo');
}

export function clear() {
  console.log('call clear');
}
