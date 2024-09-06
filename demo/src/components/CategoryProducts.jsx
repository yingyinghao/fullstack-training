import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
    const {cname}=useParams();
  return (
    <div>
        <h2> {cname} products</h2>
    </div>
  )
}

export default CategoryProducts