import React, { useCallback, useState } from 'react'

export default function WebDesign() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = useCallback(() => {
    console.log('Component handleIncrement render')
    setCounter((prev) => prev + 1)
    // Dependency removed!
  }, [])

  const handleDelayedIncrement = useCallback(() => {
    console.log('Component handleDelayedIncrement render')
    // Using prev state helps us to avoid unexpected behaviour
    setTimeout(() => setCounter((prev) => prev + 1), 1000)
    // Dependency removed!
  }, [])

  return (
    <div>
      <h1>Web Design</h1>
      <h1>{`Counter is ${counter}`}</h1>

      <button onClick={handleIncrement}>Instant increment</button>
      <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  )
}
