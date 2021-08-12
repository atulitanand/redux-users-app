import { createStore } from "redux";
import { done, DONE, LOAD_USER, RESET } from "../actions/user.action";
import { loadUser } from "../utils/utils";


const initialState = {
    users: [],
    loading: false,
    isFull: false,
};



const reducer = (state = initialState, action) => {
    let { users } = state;
    if (action.type === DONE) {
        console.log('-updated-')
        let isFull = state.users.length >= 10 ? true : false;
        return { ...state, loading: false, isFull }
    } else if (action.type === LOAD_USER) {
        loadUser(action.payload).then((user) => {
            users.push(user)
        }).then(() => store.dispatch(done()));
        return { ...state, loading: true }
    } else if (action.type === RESET) {
        return {
            users: [],
            loading: false,
            isFull: false
        }
    } else {
        return state
    }
}


export const store = createStore(reducer)
