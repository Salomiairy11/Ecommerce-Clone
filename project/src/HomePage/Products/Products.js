import React from 'react'
import Card from './Card.js'
//import Categories from './Categories.js'
import './Card.css'
import IndividualFilteredProduct from './IndividualFilteredProduct.js'
import Slider from './Slider.js'

export default function Products({ handleClick, searchTerm }) {
  const [allProduct, setAllProduct] = React.useState([])
  const [searchresults, setSearchResults] = React.useState('')

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

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults(allProduct)
    } else {
      const newProductList = allProduct.filter((product) => {
        return Object.values(product)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      })
      setSearchResults(newProductList)
    }
  }, [searchTerm])
  

  return (
    <div className="categ">
      <div className="product_list">
        <h2>Categories</h2>
        <div className="item_list">
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
              {filteredProducts.map((individualFilteredProduct) => (
                <IndividualFilteredProduct
                  key={individualFilteredProduct.id}
                  individualFilteredProduct={individualFilteredProduct}
                />
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length < 1 && searchresults.length < 1 && (
          <div>
            <Slider />
            <div className="elem">
              <div className="elem2">
                <h2>All Products</h2>
                {allProduct.map((card) => {
                  return (
                    <Card key={card.id} card={card} handleClick={handleClick} />
                  )
                })}
              </div>
            </div>
          </div>
        )}
        {searchresults.length > 1 && (
          <div className="elem3">
            {searchresults.map((card) => {
              return (
                <div className="search_products">
                  <Card key={card.id} card={card} handleClick={handleClick} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
