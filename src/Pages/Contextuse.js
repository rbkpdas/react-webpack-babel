import React, { useContext } from 'react'
import { UserContext } from './Services'

function Contextuse() {
  const username = useContext(UserContext)
  return (
    <div>
      <h2>Render Props method</h2>
      <p>Welcome useContext {username}</p>
    </div>
  )
}

export default Contextuse
