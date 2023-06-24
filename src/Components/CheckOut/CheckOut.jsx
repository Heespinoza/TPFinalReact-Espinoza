


import { useState } from "react";

import { useContext } from "react";
import { createOrder } from "../../Firebase/Firebasedb"
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { cartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
    const { cart, PrecioTotal, DelCart } = useContext(cartContext)
    const navigateTo = useNavigate()




    async function handleConfirm(userData) {
        const order = {
            items: cart,
            buyer: userData,
            date: new Date(),
            precioT: PrecioTotal()
        }
        const id = await createOrder(order);
        if (id) {
            console.log("respuesta", id)
        };
        DelCart();
        navigateTo(`/orden-confirmada/${id}`);


    }



    return (
        <div>
            <h1></h1>
            <CheckoutForm onConfirm={handleConfirm} />
        </div>
    )
}


export default CheckOut


