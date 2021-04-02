import React from "react";
import { useC2Mod, typeCtxM } from "services/concent";

function setup(c: any) {
  const ctx = typeCtxM('Test', {}, c);
  const { mr } = ctx;
  return {
    changeLabel: () => mr.changeLabel(`${Date.now()}`),
    asyncChangeLabel: mr.asyncChangeLabel,
    changeLabelLocal: () => ctx.setState({ label: `${Date.now()}` }),
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => ctx.setState({ label: e.target.value })
  }
}

function Parent() {
  const { state, settings, syncer, mr } = useC2Mod('Test', { setup });
  return (
    <div>
      {state.loading ? <h1>loading...</h1> : ''}
      <h1 onClick={settings.changeLabel}>{state.label}</h1>
      <input value={state.label} onChange={syncer.label} />
      <button onClick={settings.changeLabelLocal}>changeLabelLocal</button>
      <button onClick={mr.asyncChangeLabel}>asyncChangeLabel</button>
      <h1 >times: {state.times}</h1>
      <Child1 />
      <Child1 />
    </div>
  );
}


function setup2(c: any) {
  const ctx = typeCtxM('Test', {}, c);
  const ins = ctx.initState({
    showLabel: true,
  });
  return {
    ins,
  }
}

interface IChildProps {
  alertMsg?: (msg: string) => void;
}
// scu
const Child1 = React.memo<IChildProps>(function (props) {
  const { state, settings, ccUniqueKey } = useC2Mod('Test', { setup: setup2 });
  console.log(`render ${ccUniqueKey}`);
  return (
    <div style={{ border: '1px solid blue', padding: '12px', margin: '12px' }}>
      {state.loading ? <h1>loading...</h1> : ''}
      <button onClick={settings.ins.sybo.showLabel}>toggleShow</button>
      <h2>{settings.ins.state.showLabel ? state.label : 'no label'}</h2>
    </div>
  );
});

export default function TestComp() {
  return (
    <div>
      <Parent />
    </div>
  );
}
