import { createStore } from "redux"

const initialState = { value: 0 }

const INCREASE = 'increase'
const increase = () => ({ type: INCREASE })

export const reducer = (state = initialState, action) => {
    if (action.type === INCREASE) {
        return { ...state, value: state.value + 1 }
    }
    return state
}

export const store = createStore(reducer)

console.log('store:', store)
console.log('---state---');
store.subscribe(() => console.log(store.getState()))
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(increase());