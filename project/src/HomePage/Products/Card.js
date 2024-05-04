import './Card.css'

export default function Card({card,handleClick})
{
  const { id, title, discountPercentage, price } = card;
        let imgsrc
        imgsrc = `https://cdn.dummyjson.com/product-images/${id}/1.jpg`;

        

      return (
        <div className="card">
          <img className="pic" src={imgsrc} alt="not found"></img>
          <div className="for_button">
            <div className="desc">
              <p className="name">{title}</p>
              <p className="dis">{discountPercentage}% off</p>
              <p className="price">Price: {price}</p>
            </div>
            <div className="add_cart">
              <button
                onClick={() => {
                  handleClick(card)
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )
}