import React, { useState } from "react";
import axios from "axios"
import "./index.scss"

const AddPage = () => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const AddProduct = async () => {
    const response = axios.post("http://localhost:3000/products/", {
      image: image,
      name: name,
      price: price  
    });
  };
  return (
    <div className="addPage">
      <form action="">
        <input
          type="text"
          placeholder="your image here..."
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="your product name here..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="your product price here"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={AddProduct}>Add Product</button>
      </form>
    </div>
  );
};

export default AddPage;
