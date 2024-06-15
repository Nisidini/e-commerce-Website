import Cart from "../models/cart.js";

// Function to add a product to the cart
export const addToCart = async (req, res) => {
  const { id, name, image, price, quantity } = req.body;
  try {
    const newCart = await Cart.create({ id, name, image, price, quantity });
    res.status(201).send(newCart);
    console.log("Added Successfully...");
  } catch (error) {
    res.status(500).send(error);
  }
};

// Function to delete a product from the cart
export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(200).send({ message: 'Deleted Successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
