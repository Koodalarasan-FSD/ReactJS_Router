import React from 'react'
import { useParams } from 'react-router'

// React Router - Dynamic Routes - https://www.youtube.com/watch?v=P5xgsRIKJjo
// React Router - URL Params - https://www.youtube.com/watch?v=4W7z_iVSmKA

export const UserDetails = () => {
    const params=useParams()
    const userId=params.userId
  return (
    <div>Details about User {userId}</div>
  )
}
