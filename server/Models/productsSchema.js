import mongoose from "mongoose";
const {Schema} = mongoose

const Products = new Schema({
    image: String,
    name: String,
    price: Number,
  });


export const FlowerProducts = mongoose.model("imtahan3", Products)