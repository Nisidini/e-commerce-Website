import Cart from "../models/cart.js";

export const addToCart = async(req,res)=>{
    const {id} = req.body;
    try{
        const newCart =  await Cart.create({id});
        res.status(201).send(newCart);
        console.log("Added Successfullyy...");
    }catch(error){
        res.status(500).send(error);
    }

}

export const deleteCart = async (req,res) =>{
    try{
        const {id} = req.params;
        await Cart.findByIdAndDelete(id);
        res.status(200).send({ message: 'Deleted Successfully' });
    }catch(error){
        res.status(500).send(error);
    }
}
