
function getInitialState() {
  return {
    loading: false,
    label: 'xxxLabel',
    times: 3,
  };
}

export type St = ReturnType<typeof getInitialState>;

export default getInitialState;
