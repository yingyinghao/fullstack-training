import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
const Gallery=()=>{
  const [searchParam,setSearchParam]=useSearchParams();
  const [postData,setPostData]=useState([])
  const API="https://jsonplaceholder.typicode.com/posts";
  const xyz=()=>{
    axios.get(API)
    .then(res=>{
      console.log(res.data)
      setPostData(res.data)
    })
    .catch(err=> console.log(err))
  }
    return (
        <>
          <h2> Gallery Page</h2>
          <p> {searchParam.get('ser')}</p>
          <button onClick={xyz}> Fetch Posts</button>
          {
            postData.map(post=>
                <div key={post.id}>
                    <h4> {post.title} </h4>
                    <p> {post.body} </p>
                    <hr/>
                </div>
            )
          }
        </>
    )
}
export default Gallery;