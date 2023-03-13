import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ListPostsView from './ListPostsView'

const ListPostsControl = () => {
   const [data,setData]=useState([])
   console.log(data)


   useEffect(() => {
     axios.get("http://localhost:3035/posts")
     .then((res=>setData(res.data)))
     .catch((err)=>console.log(err))
   }, [])
   

  return <ListPostsView data={data}/>
}

export default ListPostsControl