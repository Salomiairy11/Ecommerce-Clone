import React from 'react'
import Card from './Card.js'
//import Categories from './Categories.js'
import './Card.css'
import IndividualFilteredProduct from './IndividualFilteredProduct.js'


export default function Products() {
  const [allProduct, setAllProduct] = React.useState([])

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products)
      })
  }, [])

  const [filteredProducts, setFilteredProducts] = React.useState([])


  //category state
  const [category, setCategory] = React.useState('')

  //categories list rendering using span tag

  const [spans] = React.useState([
    { id: 'smartphones', text: 'smartphones' },
    { id: 'laptops', text: 'laptops' },
    { id: 'fragrances', text: 'fragrances' },
    { id: 'skincare', text: 'skincare' },
    { id: 'groceries', text: 'groceries' },
    { id: 'home-decoration', text: 'home-decoration' },
  ])



  //set category and active status
  const handleChange = (individualSpan) => {
    setCategory(individualSpan.text)
    filterFunction(individualSpan.text)
  }

  const filterFunction = (text) => {
    const filter = allProduct.filter((product) => product.category === text)
    setFilteredProducts(filter)
  }

  // return to all products
  const returntoAllProducts = () => {
    setCategory('')
    setFilteredProducts([])
  }

  return (
    <div className="categ">
      <div className='product_list'>
        <h2>Categories</h2>
        <div className='item_list'>
        {spans.map((individualSpan, index) => (
          <span
            key={index}
            id={individualSpan.id}
            onClick={() => handleChange(individualSpan)}
            className="category"
          >
            {individualSpan.text}
          </span>
        ))}
      </div>
      </div>
      <div className="elements">
        {filteredProducts.length > 0 && (
          <div className="my-products">
            <a href="#" onClick={returntoAllProducts} className="anchortag">
              Return to All Products
            </a>
            <h1 className="text-center">{category}</h1>
            <div className="probox">
              {filteredProducts.map((pro) => (
                <IndividualFilteredProduct
                  key={pro.id}
                  id={pro.id}
                  title={pro.title}
                  discount={pro.discountPercentage}
                  price={pro.price}
                  category={pro.category}
                />
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length < 1 &&
         (<div className='elem'>
          <h2>All Products</h2>
          <div className='elem2'>
          {
             allProduct.map((pro) => {
            return (
              <Card
                key={pro.id}
                id={pro.id}
                title={pro.title}
                discount={pro.discountPercentage}
                price={pro.price}
                category={pro.category}
              />
            )
          })
          }
          </div>
          </div>
         )
         }
      </div>
    </div>
  )
}
