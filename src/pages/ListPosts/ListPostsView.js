import React from "react";

const ListPostsView = ({data}) => {
  
  return <div className="container">
    {
      data.map(post=>(
        
        <div className="post">
          <div className="post-info">
            <h1>{post.title}</h1>
             <p>{post.user}</p>
          </div>
          <p>{post.text}</p>
           </div>
      ))
    }
  </div>;
};

export default ListPostsView;
