import React from 'react'

export default function IndividualFilteredProduct({ individualFilteredProduct }) {

  const { id, title, discountPercentage, price, thumbnail} = individualFilteredProduct
  //let imgsrc
  //imgsrc = `https://cdn.dummyjson.com/product-images/${id}/1.jpg`
  return (
    <div className="card">
      <img className="pic" src={thumbnail} alt="not found"></img>
      <div className="for_button">
        <div className="desc">
          <p className="name">{title}</p>
          <p className="dis">{discountPercentage}% off</p>
          <p className="price">Price: {price}</p>
        </div>
        <div className="add_cart">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}