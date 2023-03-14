import React from "react";
import Header from "../../components/Header";

const ListPostsView = ({data}) => {
  
  return(
     <>
     <Header/>
    <div className="container">
    {
      data.map(post=>(
        
        <div className="post" key={post.id}>
          <div className="post-info">
            <h1>{post.title}</h1>
             <p>{post.user}</p>
          </div>
          <p className="post-text">{post.text}</p>
           </div>
      ))
    }
  </div>;
  </>
  )
  
  
};

export default ListPostsView;
