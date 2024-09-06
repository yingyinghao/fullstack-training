// const About=({heading,category})=>{
//     return (
//         <div>
//             <h2> {heading}</h2>
//             <h4> Categories</h4>
//             <ul>
//                 {category.map((val,ind)=> 
//                   <li key={ind}> {val}</li>
//                 )}
//             </ul>
//         </div>
//     )
// }
// export default About;
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  let xyz="sumit"
  return (
    <div>
        <h2> About Us </h2>
        <Link to={`/gallery?ser=${xyz}`}> Search</Link>
    </div>
  )
}

export default About