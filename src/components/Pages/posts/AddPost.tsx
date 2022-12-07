import { useState } from 'react'
import { newPost } from '../../../interfaces/posts/interfaces'
import { useDispatch } from "react-redux"

import { addPost } from '../../../redux/actions/postactions'
import { useNavigate } from 'react-router-dom'



const AddPost = () => {

  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const createItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost: newPost = {
      title,
      body
    }
    dispatch(addPost(newPost))
    navigate("/posts")
  }



  return (
    <form onSubmit={(e) => createItem(e)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">title</label>
        <input value={title!} type="text" className="form-control" placeholder="enter title" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Body</label>
        <textarea value={body!} className="form-control" placeholder="enter body" onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-sm btn-primary my-3">Submit</button>
    </form>
  )
}

export default AddPost
