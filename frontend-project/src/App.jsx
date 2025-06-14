import Home  from './pages/Home'
import Favourite from './pages/Favourite'
import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'
import Test from './pages/test' 
import Search from './pages/Search'
import './App.css'
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<Sign_in/>} />
          <Route path='/signup' element={<Sign_up/>} />
          <Route path='/favourite' element={<Favourite/>} />
          <Route path='/test' element={<Test/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </main>
    </div>
  )
}
export default App
