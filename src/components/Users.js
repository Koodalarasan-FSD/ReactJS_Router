import React from 'react'
import { useSearchParams } from 'react-router-dom'

// React Router - Dynamic Routes - https://www.youtube.com/watch?v=P5xgsRIKJjo
// React Router - Search Params - https://www.youtube.com/watch?v=jIKBiFmlS4k

export const Users = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'
    
    return (
    <div>
        <h3>Users_1</h3>
        <h3>Users_2</h3>
        <h3>Users_3</h3>
        <div>
            <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
            <button onClick={()=>setSearchParams({})}>Reset Filter</button>
        </div>
        {/*In below if showActiveUsers were initialised with value it will show first h3 tag or else shows second h3 tag */} 
        {
        showActiveUsers ? (<h3>Showing Active Users</h3>) : (<h3>Showing All Users</h3>)
        }
    
    </div>
  )
}
