import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ListPostsView from './ListPostsView'

const ListPostsControl = () => {
   const [data,setData]=useState([])
   const [filteredData,setFilteredData]=useState([])
  //  console.log(data)
  const [showModal,setShowModal]=useState(false)
   const user=(user)=>{
    // alert(user)
    const filtered=data.filter(post=>post.user===user);
    // console.log(filtered)
    setFilteredData(filtered)
    setShowModal(true)
  }

   useEffect(() => {
     axios.get("http://localhost:3035/posts")
     .then((res=>setData(res.data)))
     .catch((err)=>console.log(err))
   }, [])
   

  return <ListPostsView 
  user={user} 
  data={data}
  showModal={showModal}
  setShowModal={setShowModal}
  filteredData={filteredData}/>
}

export default ListPostsControl