import Home  from './pages/Home'
import Favourite from './pages/Favourite'
import NavBar from './components/NavBar'
import Test from './pages/test' 
import MovieCard from './components/MovieCard'
import './App.css'
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div>
    <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />;
        <Route path='/favourite' element={<Favourite/>} />;
      </Routes>
    </main>
    </div>
  )
}
export default App
