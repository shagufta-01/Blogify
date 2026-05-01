import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import {Link} from 'react-router-dom'
function Home() {
  const {blogs} =  useAuth()
  return (
    <div>
     {blogs && blogs.length > 0 ? (
  blogs.slice(0, 3).map((element) => {
    return (
      <Link to="/" key={element._id}>
        <div>
          <img src={element.blogImage.url} alt={element.title} />
          <h1>{element.title}</h1>
        </div>

        <div>
          <img src={element.adminPhoto} alt={element.adminName} />
          <div>
            <p>{element.adminName}</p>
            <p>New</p>
          </div>
        </div>
      </Link>
    );
  })
) : (
  <p>No blogs found</p>
)}
    </div>
  )
}
export default Home