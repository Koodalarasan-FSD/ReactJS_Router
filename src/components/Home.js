import React from 'react'
import { useNavigate } from 'react-router'

// React Router - Configuring Routes - https://www.youtube.com/watch?v=09dh_T-ZHl0
// React Router - Navigating Programmatically - https://www.youtube.com/watch?v=uKRo1Re_B8c


export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={()=>navigate('order_summary')}>Place Order</button>
    </>
  )
}
