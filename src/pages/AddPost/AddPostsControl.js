import React from 'react'
import AddPostsView from './AddPostsView'

const AddPostsControl = () => {
  //input değerleri
  const onInputChange=(label,value)=>{
    console.log(label,value)
  }
  //button onsubmit
  const handleSubmit=()=>{

  }
  return <AddPostsView 
  onInputChange={onInputChange}
  handleSubmit={handleSubmit}/>
}

export default AddPostsControl