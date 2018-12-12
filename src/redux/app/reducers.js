const initState = {
  count: 1
}

export default function(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
