import React from "react";
import Header from "../../components/Header";
import { ModalView } from "../../components/ModalView";

const ListPostsView = ({data,user,showModal,setShowModal,filteredData}) => {
  
  return(
     <>
     <Header/>
    <div className="container">
    {
      data.map(post=>(
        
        <div className="post" key={post.id}>
          <div className="post-info">
            <h1>{post.title}</h1>
             <p onClick={(e)=>user(post.user)}>{post.user}</p>
          </div>
          <p className="post-text">{post.text}</p>
           </div>
      ))
    }
  </div>;
  <ModalView 
  filteredData={filteredData}
  showModal={showModal}
  setShowModal={setShowModal}/>
  </>
  )
  
  
};

export default ListPostsView;
