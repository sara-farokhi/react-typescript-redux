import React from 'react'
import { Route, Routes } from "react-router-dom"
import AddPost from '../AddPost'
import EditPost from '../EditPost'
import Posts from '../Posts'



const PostsRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/add' element={<AddPost />} />
      <Route path='/edit' element={<EditPost />} />
    </Routes>
  )
}

export default PostsRouter
