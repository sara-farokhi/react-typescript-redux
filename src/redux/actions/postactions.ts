import axios from "axios";
import { actionTypes } from "../../actionTypes";
import { Dispatch } from "redux";
import { Action } from "../../interfaces/posts/interfaces"
import { newPost, post } from "../../interfaces/posts/interfaces";

// get posts
export const getPosts = (): any => async (dispatch: Dispatch<Action>) => {
    const res = await axios.get("http://localhost:3004/posts")
    const data = res.data
    dispatch({ type: actionTypes.GET_POSTS, payload: data })
}

// add post
export const addPost = (newPost: newPost): any => async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.post<newPost>("http://localhost:3004/posts", newPost)
    dispatch({ type: actionTypes.SET_POST, payload: data })
}


// update post
export const editPost = (updatedData: post): any => async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.put <newPost>(`http://localhost:3004/posts/${updatedData.id}`, updatedData)
    dispatch({ type: actionTypes.UPDATE_POST, payload: data })
}

// delete post
export const deletPost = (id: number): any => async (dispatch: Dispatch<Action>) => {
    await axios.delete(`http://localhost:3004/posts/${id}`)
    dispatch({ type: actionTypes.DELETE_POST, payload: id })
}
