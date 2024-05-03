import React from 'react'

export default function IndividualFilteredProduct(props){
    let imgsrc
    imgsrc = `https://cdn.dummyjson.com/product-images/${props.id}/1.jpg`
    return (
      <div>
        <div className="card">
          <img className="pic" src={imgsrc}></img>
          <div className="desc">
            <p className="name">{props.title}</p>
            <p className="dis">{props.discount}% off</p>
            <p className="price">Price: {props.price}</p>
          </div>
        </div>
      </div>
    )
}