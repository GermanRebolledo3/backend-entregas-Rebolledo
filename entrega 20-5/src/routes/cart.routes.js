import express from "express";
import { CartManager } from "../manager/cartManager.js";
const cartManager = new CartManager();

export const cartsRoute = express.Router();

cartsRoute.get("/:cid", async (req, res) => {
    const cartId = req.params.cid;
    const cart = await cartManager.getCart(cartId);

    if (cart) {
        return res.status(201).json({
            status: "success",
            msg: `cart: ${cartId}`,
            data: cart,
        })
    } else {
        return res.status(404).json({
            status: "error",
            msg: `cart: ${cartId}, not exist. Add a product please`,
            data: {},
        })
    }
});

cartsRoute.post("/:cid/product/:pid", async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid
    const productAddToCart = await cartManager.addItemToCart(cartId, productId);
    const cart = await cartManager.getCart(cartId);

    if (productAddToCart) {
        return res.status(201).json({
            status: "success",
            msg: "Product added",
            data: cart,
        })
    } else {
        return res.status(404).json({
            status: "error",
            msg: "Product not added",
            data: {},
        }) 
    }
});