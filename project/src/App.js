import React from 'react'
import Nav from './HomePage/Navbar/Nav.js'
import Products from './/HomePage/Products/Products.js'
import Cart from './HomePage/Products/Cart.js'
import './App.css'
import Slider from './HomePage/Slider.js'

export default function App()
{


    const [show, setShow] = React.useState(true);
    const [cart, setCart] = React.useState([]);
    const [warning, setWarning] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState("")
   

    const handleClick = (item) => {
     let isPresent = false
     cart.forEach((product) => {
        //checking if the id of the item which we  want to add to cart is already present in the cart state
       if (item.id === product.id) 
       isPresent = true
     })
     if (isPresent)
     {
        setWarning(true)
        setTimeout(()=>{
            setWarning(false)
        },4000);
        return;
     }

     setCart([...cart, { ...item, amount: 1 }]);
    }

    const handleChange = (item, d) => {
      let ind = -1
      cart.forEach((data, index) => {
        if (data.id === item.id) ind = index
      })
      const tempArr = cart
      tempArr[ind].amount += d

      if (tempArr[ind].amount === 0) tempArr[ind].amount = 1
      setCart([...tempArr])
    }

    const searchHandler = (searchTerm)=>{
       setSearchTerm(searchTerm)
    }

    return (
      <div>
        <Nav
          size={cart.length}
          setShow={setShow}
          searchTerm={searchTerm}
          searchHandler={searchHandler}
        />
       
        {warning && (
          <div className="warning">Item is already added to your cart</div>
        )}
        {show ? (
          <div>
          <Slider />
          <Products
            handleClick={handleClick}
            searchTerm={searchTerm}
            searchHandler={searchHandler}
          />
          </div>
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
      </div>
    )
}
