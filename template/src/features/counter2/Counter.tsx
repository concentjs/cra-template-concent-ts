import React from "react";
import { useModel } from './model/meta';
import styles from "./Counter.module.css";

export function Counter() {
  const ctx = useModel();
  // module state, module computed, module reducer
  const { state, moduleComputed, mr } = ctx;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={mr.increment}
        >
          +
        </button>
        <span className={styles.value}>{state.value}</span>
        <span className={styles.value}>
          doubleCount: {moduleComputed.doubleCount}
        </span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={mr.decrementOne}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={state.toInc}
          onChange={(e) => mr.setState({ toInc: Number(e.target.value) || 0 })}
        />
        <button
          className={styles.button}
          onClick={mr.increment}
        >
          Add Amount For Counter2
        </button>
        <button
          className={styles.asyncButton}
          onClick={mr.incrementAsync}
        >
          Add Async
        </button>
        <button className={styles.normalButton} onClick={mr.incrementBigValue}>
          Add Big Value
        </button>
      </div>
    </div>
  );
}
