import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddPostsModel from './AddPostsModel'
import AddPostsView from './AddPostsView'

const AddPostsControl = () => {
  const navigate=useNavigate()
  const model=new AddPostsModel()
  // console.log(model)
  const [form,setForm]=useState(model.state)

  

  //input değerleri
  const onInputChange=(label,value)=>{
    // console.log(label,value)
    var newInput={...form};newInput[label]=value;
    // console.log(newInput)
    setForm(newInput)
  }
  //button onsubmit
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(form)
    if(!form.user||!form.title||!form.text){
      alert("Verileri doldurun")
    }else{
      axios.post("http://localhost:3035/posts",form)
      .then(()=>navigate("/"))
    }
  }
  return <AddPostsView 
  onInputChange={onInputChange}
  handleSubmit={handleSubmit}/>
}

export default AddPostsControl