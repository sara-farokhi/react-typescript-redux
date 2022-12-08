import React from 'react'
import { Route, Routes } from "react-router-dom"
import AddPost from '../../components/Pages/posts/AddPost'
import EditPost from '../../components/Pages/posts/EditPost'
import Posts from '../../components/Pages/posts/Posts'

const PostsRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/add' element={<AddPost />} />
      <Route path='/edit/:id' element={<EditPost />} />
    </Routes>
  )
}

export default PostsRouter
