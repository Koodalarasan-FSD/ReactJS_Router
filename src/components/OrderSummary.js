import React from 'react'
import { useNavigate } from 'react-router'

// React Router - Navigating Programmatically - https://www.youtube.com/watch?v=uKRo1Re_B8c

export const OrderSummary = () => {
    const navigate=useNavigate()
    return (
        <>
            <div>Order Confirmed!</div>
            <button onClick={()=>navigate('/')}>Go Back</button>
        </>
    )
}
