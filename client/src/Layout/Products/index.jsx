import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import "./index.scss";
import { CiHeart } from "react-icons/ci";

import { WishlistContext } from "../../Context/wishlistContext.jsx";
const Products = () => {
  const [product, setProduct] = useState("");
  async function axiosData() {
    const response = await axios.get("http://localhost:3000/products/");
    setProduct(response.data);
  }
  useEffect(() => {
    axiosData();
  }, []);
  
  const sortByPrice = ()=>{
    setProduct([...product].sort((a,b)=>a.price>b.price ? 1 : b.price > a.price ? -1 : 0))

  }

  const { wishlist , addToWishlist } = useContext(WishlistContext)
  
  console.log(wishlist);
  return (
    <section id="Products">
      <div className="background">
        <div className="sectionContainer">
          <div className="productsContents">
            <div className="productsHeader">
              <div className="productsDescription">
                <span className="description">Devoted to wonderful beauty</span>
              </div>
              <div className="productsTitle">
                <h4>Flowers Pricing</h4>
              </div>
              <div className="productFilter">
                <button className="filterByPrice" onClick={sortByPrice}>Filter by Price</button>
              </div>
            </div>
            <div className="productCards">
              {product &&
                product.map((item) => (
                  <div className="productCard">
                    <div className="productImg">
                      <img src={item.image} />
                    </div>
                    <div className="productName">
                        <p>{item.name}</p>
                    </div>
                    <div className="productPrice">
                        <p>${item.price}</p>
                    </div>
                    <div className="addToWishList">
                      <button className="addToWishListBtn" onClick={()=>addToWishlist(item)}>
                      <CiHeart/>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
