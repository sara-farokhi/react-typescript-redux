import { actionTypes } from "../../actionTypes";

export interface initState {
    posts: post[]
}

export interface newPost {
    body: string;
    title: string;
}

export interface post extends newPost {
    id?: number;
}

interface getPostAction {
    type: actionTypes.GET_POSTS;
    payload: post[]
}
interface setPostAction {
    type: actionTypes.SET_POST,
    payload: post
}
interface deLetePostAction {
    type: actionTypes.DELETE_POST,
    payload: number
}
interface updatePostAction {
    type: actionTypes.UPDATE_POST,
    payload: post
}

export type Action = getPostAction | setPostAction | deLetePostAction | updatePostAction

