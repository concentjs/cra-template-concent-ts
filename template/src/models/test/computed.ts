import { St } from './state';

// only value change will triiger this function to execute again
export function doubleCount({ label }: St) {
  return `${label}_${Date.now}`;
}
