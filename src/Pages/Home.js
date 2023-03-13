import React, { useState, useEffect } from 'react'

const Home = () => {
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [itemId, setItemId] = useState(1)
  const [items, setItems] = useState([])
  const [posts, setPosts] = useState({})
  const [emps, setEmps] = useState([])
  const [count, setCount] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const logMouseposition = (e) => {
    console.log('logMousePosition')
    setX(e.clientX)
    setY(e.clientY)
  }
  const tick = () => {
    setCount((PrevCount) => PrevCount + 1)
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEmps(data)
        setPosts(data)
      })
    const interval = setInterval(tick, 200)
    console.log('Use effect Called')
    //componentWillUnmount code with cleanup function
    //ComponentDidMount useEffect without [] - dependency Run effects only once
    //ComponentDidUpdate(preProps, preState) Conditionally run  useEffect with [some dependent value] - dependency
    document.title = `${count} :: Use effect change after every render`
    window.addEventListener('mousemove', logMouseposition)
    //useEffect with cleanup
    return () => {
      console.log('componentWillUnmount code with cleanup function')
      window.removeEventListener('mousemove', logMouseposition)
      clearInterval(interval)
    }
  }, [itemId])

  const handleSubmit = () => {
    setCount(count + 1)
    const addItem = { name: search, id: items.length }
    setItems([...items, addItem])
  }

  const handleInput = (e) => {
    setSearch(e.target.value)
  }
  const handleReset = () => {
    setItems([])
  }
  const addTitle = (titleInfo) => {
    setTitle(titleInfo)
  }
  return (
    <div>
      <p>
        X- {x}, Y-{y}
      </p>
      <p>{count}</p>
      <p>{title}</p>
      <input type="text" onChange={(e) => handleInput(e)} />
      <input type="button" value="Add New" onClick={handleSubmit} />
      &nbsp;
      <input type="button" value="Reset" onClick={handleReset} />
      <br />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h2>{`Fetch Data from Rest Service`}</h2>
      <p>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </p>
      <ul>
        {emps.length > 0 &&
          emps.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
      <br />
      {posts && posts.name}
    </div>
  )
}

export default Home
