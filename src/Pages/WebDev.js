import React, { createContext, useContext, useMemo, useState } from 'react'

// Created context
const UserContext = createContext()

// That component separates user context from app, so we don't pollute it
function UserContextProvider({ children }) {
  const [name, setName] = useState('Rahas Bihari')
  const [surname, setSurname] = useState('Das')

  // We want to remember value reference, otherwise we will have unnecessary rerenders
  const value = useMemo(() => {
    return {
      name,
      surname,
      setName,
      setSurname,
    }
  }, [name, surname])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function PageFirst() {
  const { name } = useContext(UserContext)

  return name
}

function PageSecond() {
  const { surname } = useContext(UserContext)

  return surname
}

export default function WebDev() {
  return (
    <>
      <h2>Web development content</h2>
      <UserContextProvider>
        <PageFirst />
        <PageSecond />
      </UserContextProvider>
    </>
  )
}
