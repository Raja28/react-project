import {useDispatch, useSelector} from 'react-redux'

import './App.css'
import { IncButton } from './components/IncButton'
import { DecButton } from './components/DecButton'

function App() {
  const count = useSelector(state => state.value)

  return (
    <>
      <IncButton/>
      {
        count
      }
      <DecButton/>
    </>
  )
}

export default App
