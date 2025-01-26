import react from 'react'
import './App.css'
import Currency from './components/currency/Currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Currency />
    </>
  )
}

export default App
