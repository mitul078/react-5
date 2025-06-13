
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import '../styles/checkout.css'

const Checkout = () => {
    const { id } = useParams();
    const [product, setproduct] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    let [qauntityP, setqauntityP] = useState(1)


    const add = () => {
        setqauntityP(qauntityP = qauntityP + 1)
    }
    const sub = () => {
        setqauntityP( qauntityP > 1 ? qauntityP = qauntityP - 1 : 1)
    }

    
    const price = Number(product.productPrice) || 0
    const quantity = Number(qauntityP)
    const totalAmount = price * quantity


    
    useEffect(() => {
        if (user?.Cart && id) {
            const matchedProduct = user.Cart.find(item => item.id == id);
            setproduct(matchedProduct);
        }
    }, [id])


    return (
        <div className='checkoutPage '>
            <div className="left">

                <div className="layer1 ">
                    <div className="box">
                        <h1>LOGIN:</h1>
                        <p>{user.name}</p>
                        <p>+91-{user.mobile ? user.mobile : "Not given"}</p>
                    </div>
                </div>
                <div className="layer2 ">
                    <h1>Delivery Address:</h1>
                    <p>Address</p>
                </div>
                <div className="layer3 ">
                    <h1>Order Summary</h1>
                    <div className="data">
                        <div className="image">
                            <img src={product.productImageURL?.[0]} alt="" />
                        </div>
                        <div className="info">
                            <h2>{product.productName}</h2>
                            <div className="quantity flex gap-2">
                                <button
                                    className='bg-blue-600'>Quantity: {quantity}
                                </button>
                                <button
                                    onClick={() => add()}
                                    className=' bg-blue-600'>+</button>
                                <button 
                                    onClick={() => sub()}
                                className=' bg-blue-600'>-</button>
                            </div>
                            <p>Seller: helloworld</p>
                            <h3>{price}</h3>
                            <p>Delevery <span> by tomorrow</span> </p>
                        </div>
                    </div>
                </div>
                <div className="layer4 flex justify-between ">
                    <p>Order Confirmation Email Will Be Sent To <span>
                        {user.email ? user.email : "Not given"}
                    </span></p>
                    <button >Continue</button>
                </div>


            </div>
            <div className="right">
                <div className="box">
                    <div className="head">
                        <h1>PriceDetail</h1>
                    </div>
                    <hr />
                    <div className="priceDetail">
                        <div className="b1">
                            <h2>Price</h2>
                            <p>{totalAmount}</p>
                        </div>
                        <div className="b2">
                            <h2>Delivery Charge</h2>
                            <p>Free</p>
                        </div>
                        <div className="b3">
                            <h2>Plateform Fee</h2>
                            <p>Free</p>
                        </div>
                    </div>
                    <hr />
                    <div className="price">
                        <h1>Total Payable</h1>
                        <p>{totalAmount}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout
