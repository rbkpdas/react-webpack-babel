import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import Contextuse from './Contextuse'
export const UserContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
const Services = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h2>Services Page</h2>
      <Link to="/web-design">Web design</Link>
      <Link to="/seo">Seo</Link>
      <UserContext.Provider value={'Rahas'}>
        <Contextuse />
      </UserContext.Provider>

      <h2>Use Reducer {count}</h2>
      <button onClick={() => dispatch('increment')}>Add +</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('decrement')}>Remove-</button>
    </>
  )
}

export default Services
