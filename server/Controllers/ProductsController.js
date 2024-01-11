import { FlowerProducts } from "../Models/productsSchema.js";

export const GetAllFlowers = async (req,res) => {
    const data = await FlowerProducts.find({});
    res.send(data);
}

export const PostFlowers = async (req,res) => {
    try {
    const newFlower = new FlowerProducts({...req.body});
    await newFlower.save()
    res.status(200).json("product added successfully!")
    } catch (error) {
        res.status(500).json("Couldn't add product!")
    }
}


export const DeleteFlower = async (req,res) => {
    try {
        const { id } = req.params
        const deleteProduct = await FlowerProducts.findByIdAndDelete(id)

        res.status(200).json("Product deleted successfully!")
    } catch (error) {
        res.status(500).json("Couldn't delete product!")
    }
}