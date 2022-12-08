import { actionTypes } from "../../../actionTypes";
import { initState, Action, post } from "../../../interfaces/posts/interfaces";


const initialState: initState = {
    posts: [],
    loading: true
}

const postReducer = (state = initialState, action: Action): initState => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return { ...state, posts: action.payload, loading: false }
        case actionTypes.SET_POST:
            return { ...state, posts: [...state.posts, action.payload] }
        case actionTypes.DELETE_POST:
            return { ...state, posts: state.posts.filter((post: post) => post.id !== action.payload) }
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return initialState

    }
}
export default postReducer