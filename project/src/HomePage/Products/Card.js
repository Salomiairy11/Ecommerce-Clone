import './Card.css'
import { useNavigate } from 'react-router-dom';

export default function Card({card,handleClick})
{
  const { id, title, discountPercentage, price } = card;
  const state = localStorage.getItem('loggedin');
  const navigate = useNavigate();

  function handleCart(){
    navigate('/SignIn');
  }

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
              {state ? (
                <button
                  onClick={() => {
                    handleClick(card)
                  }}
                >
                  Add To Cart
                </button>
              ) : (
                <button
                  onClick={handleCart}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )
}