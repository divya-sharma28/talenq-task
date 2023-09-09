import './App.css'
import Dashboard from './Dashboard'
import { ModeProvider } from './Context/ModeContext'
function App() {


  return (
    <>
    <ModeProvider>

     <Dashboard/>

    </ModeProvider>
    </>
  )
}

export default App
