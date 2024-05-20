import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyState } from './mystate.jsx/mystate'
import { ObjectState } from './objectstate/objectstate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <MyState />
  <ObjectState />
    </>
  )
}

export default App
