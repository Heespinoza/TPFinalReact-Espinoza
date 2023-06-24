import React from "react";
import { useParams } from "react-router-dom";

function OrdenConfirm(){
    const { orderid } = useParams();
    return(
        <div>
        <h1>Gracias por tu compra</h1>
        <small>Este es tu comprobante de compra: {orderid}</small>
        </div>
    )

}

export default OrdenConfirm