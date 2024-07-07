import React from "react"
import './Cart.css'

export default function Cart({cart, setCart, handleChange})
{
    const [Price, setPrice]=React.useState(0);


    const handlePrice = () => {
      let ans = 0
      cart.map((item) => (ans += item.amount * item.price))
      setPrice(ans)
    }

    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id)
      setCart(arr)
    }

    React.useEffect(() => {
      handlePrice()
    },[cart])

    return (
      <div className="Cart">
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
              <img className="cart_img" src={item.thumbnail} />
            <div className="plus_minus">
              <p className="cart_title">{item.title}</p>
              <button className="plus" onClick={() => handleChange(item, +1)}>
                +
              </button>
              <button className="amount">{item.amount}</button>
              <button className="minus" onClick={() => handleChange(item, -1)}>
                -
              </button>
            </div>
            <div className="price">
              <span>{item.price}</span>
              <button className="remove" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span className="total_name">Rs - {Price}</span>
        </div>
      </div>
    )
}