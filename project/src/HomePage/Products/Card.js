import './Card.css'

export default function Card(props)
{
        let imgsrc
        imgsrc = `https://cdn.dummyjson.com/product-images/${props.id}/1.jpg`;
      return (
          <div className="card">
            <img className="pic" src={imgsrc} alt="not found"></img>
            <div className='for_button'>
              <div className="desc">
                <p className="name">{props.title}</p>
                <p className="dis">{props.discount}% off</p>
                <p className="price">Price: {props.price}</p>
              </div>
              <div className='add_cart'>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
      )
}