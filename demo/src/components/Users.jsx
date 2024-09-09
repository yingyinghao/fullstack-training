import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useFetchData from '../custom_hook/useFetchData';
const Users = () => {
    const URL="https://jsonplaceholder.typicode.com/users";
    const userData=useFetchData(URL);
    // const [userData,setUserData]=useState([]);
    // useEffect(()=>{
    //    axios.get(URL)
    //    .then(res=>{
    //      console.log(res.data);
    //      setUserData(res.data)
    //    })
    //    .catch(err=> console.log(err))

    //    return ()=>{
    //        setUserData([]);
    //        console.log("Unmounting Phase Call")
    //    }
    // },[]);
  return (
    <div>
        <h2> Fetch Jsonplaceholder users api data </h2>
         <hr/>
         <ul>
             {userData.map(user=> 
                <li key={user.id}> {user.name} | {user.email} </li>
             )}
         </ul>
    </div>
  )
}

export default Users