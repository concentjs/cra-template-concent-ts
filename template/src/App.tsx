import 'configs/runConcent';
import React from 'react';
import logo from './logo.svg';
import { Counter } from 'features/counter/Counter';
import Counter2 from 'features/counter2';
import { CounterTip } from 'features/counter/CounterTip';
import './App.css';
import { useSetup } from 'services/concent';
import { CtxDe } from 'types/store';

function setup(ctx: CtxDe) {
  const ins = ctx.initState({
    selectedKey: '1',
  });

  ctx.effect(() => {
    console.log('didMount');
    return () => {
      console.log('willUnmount');
    }
  }, []);

  ctx.on('someEvent', (p1: any, p2: any) => {
    // open console, input cc.emit('someEvent', 1, 2)
    alert(`p1 ${p1}, p2 ${p2}`);
  });

  // define ref computed
  const rcu = ins.computed({
    content(n) {
      const { selectedKey } = n;
      if (selectedKey === '1') return <Counter />
      else if (selectedKey === '2') return <Counter2 />
      else return `unknown selectedKey ${selectedKey}`
    },
    tip(n) {
      const { selectedKey } = n;
      if (selectedKey === '1') return <h1>hey you are choosing 1</h1>
      else return <h2>Counter2 model is a better code organization</h2>
    },
  });

  // export as settings
  return {
    rcu,
    state: ins.state,
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      ctx.setState({ selectedKey: e.currentTarget.dataset.skey });
    }
  }
}

function App() {
  const settings = useSetup(setup);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button data-skey="1" onClick={settings.handleClick}>see counter</button>
        <button data-skey="2" onClick={settings.handleClick}>see counter2</button>
        {settings.rcu.tip}
        {settings.rcu.content}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://github.com/concentjs/concent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Concent
          </a>
        </span>
        <CounterTip />
      </header>
    </div>
  );
}

export default App;
