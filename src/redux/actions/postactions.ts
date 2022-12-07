import axios from "axios";
import { actionTypes } from "../../actionTypes";
import { Dispatch } from "redux";
import { Action } from "../../interfaces/posts/interfaces"
import { newPost } from "../../interfaces/posts/interfaces";

export const getPosts = (): any => async (dispatch: Dispatch<Action>) => {
    const res = await axios.get("http://localhost:3004/posts")
    const data = res.data
    dispatch({ type: actionTypes.GET_POSTS, payload: data })
}
export const addPost = (newPost: newPost): any => async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.post<newPost>("http://localhost:3004/posts", newPost)
    
    dispatch({ type: actionTypes.SET_POST, payload: data })
}