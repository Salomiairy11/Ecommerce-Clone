import React from 'react'
import Card from './Card.js'
import './Card.css'
import IndividualFilteredProduct from './IndividualFilteredProduct.js'


export default function Products({ handleClick, searchTerm }) {
  const [allProduct, setAllProduct] = React.useState([])
  const [searchResults, setSearchResults] = React.useState('')
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products)
        // Extract categories
        const categorySet = new Set()
        data.products.forEach((product) => {
          if (product.category) {
            categorySet.add(product.category)
          }
        })

        // Convert set to array and set the state
        setCategories(Array.from(categorySet))
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const [filteredProducts, setFilteredProducts] = React.useState([])

  //category state
  const [category, setCategory] = React.useState('')

  const handleChange = (category) => {
    setCategory(category)
    filterFunction(category)
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
    <section className="categ">
      <div className="product_list">
        <p>Categories</p>
        <ul className="item_list">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleChange(category)}
              className="category"
            >
              {category}
            </li>
          ))}
        </ul>
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
        {filteredProducts.length < 1 && searchResults.length < 1 && (
          <div>
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
        {searchResults.length > 1 && (
        <div className="elem3">
        <div className="search-elements">
            {searchResults.map((card) => {
              return (
                  <Card key={card.id} card={card} handleClick={handleClick} />
              )
            })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
