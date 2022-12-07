import { actionTypes } from "../../../actionTypes";
import { initState, Action } from "../../../interfaces/posts/interfaces";


const initialState: initState = {
    posts: [],
}

const postReducer = (state = initialState, action: Action): initState => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return { ...state, posts: action.payload }
        case actionTypes.SET_POST:
            console.log(action.payload)
            return { ...state, posts: [...state.posts, action.payload] }
        default:
            return initialState

    }
}
export default postReducer