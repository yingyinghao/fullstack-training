import axios from "axios";
import { useEffect, useState } from "react";
const useFetchData=(url)=>{
   const [data,setData]=useState([]);
   useEffect(()=>{
     axios.get(url)
     .then(res=> setData(res.data))
     .catch(err=> console.log(err))
   },[])
   return data;
}
export default useFetchData;