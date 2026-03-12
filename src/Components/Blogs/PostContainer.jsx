import React from 'react'
import Blogs from '../../Api/Blogs'
import PostCard from './PostCard'
const PostContainer = () => {

  return (
    <div className='post-container'>
     {Blogs.map((user)=>(
       <PostCard user={user} /> 
     ))}    
    </div>
  )
}

export default PostContainer