import React from 'react'

const PostCard = ({user}) => {
  return (
    <div className='post-card'>
      <div className="post-img">
        <img src={user.img} alt="post-img" />

        </div>  
        <div className="post-content">
         <div className="detail">
            <p>{user.user}</p>
            <p>{user.date}</p>
            </div>   
            <h3>{user.title}</h3>
            <p>{user.desc}</p>
            <button>continue reading</button>
        </div>
    </div>
  )
}

export default PostCard