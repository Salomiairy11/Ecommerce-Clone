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
            <div className="cart_img">
              <img
                src={`https://cdn.dummyjson.com/product-images/${item.id}/1.jpg`}
              />
              <p className="cart_title">{item.title}</p>
            </div>
            <div className="plus_minus">
              <button className="plus" onClick={()=>handleChange(item, +1)}> + </button>
              <button className="amount">{ item.amount}</button>
              <button className="minus" onClick={()=>handleChange(item, -1)}> - </button>
            </div>
            <div className="price">
              <span>{item.price}</span>
              <button className="remove" onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span >Total Price of your Cart</span>
          <span className="total_name" >Rs - {Price}</span>
        </div>
      </div>
    )
}