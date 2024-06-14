import express from 'express';
import  {addToCart, deleteCart} from "../controllers/cartController.js";

const router = express.Router();

router.route("/addToCart").post(addToCart);
router.route("/deleteCart").delete(deleteCart)

export default router;
