import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useSelector from '../../../hooks/useTypeSelector'
import { getPosts, deletPost } from '../../../redux/actions/postactions'
import { Link } from 'react-router-dom'


const Posts = () => {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const deleteItem = (id: number) => {
    dispatch(deletPost(id))
  }
  if (loading) {
    return <> Loading</>
  }
  return (
    <>

      {posts!.length > 0 && <div>
        <Link to='/posts/add' > <div className="btn btn-success">Add Post</div></Link>
        <div className="row">
          {posts!.map((post, i) => <div key={i} className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
              <div className="card-footer d-flex">
                <Link to={`/posts/edit/${post.id}`}>
                  <div className="btn btn-primary btn-sm mx-3">edit</div></Link>
                <div className="btn btn-danger btn-sm" onClick={() => deleteItem(post.id!)}>delete</div>
              </div>
            </div>
          </div>)}
        </div>
      </div>}


    </>
  )
}

export default Posts
