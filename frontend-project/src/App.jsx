import Home  from './pages/Home'
import Favourite from './pages/Favourite'
import NavBar from './components/NavBar'
import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'
import Test from './pages/test' 
import Search from './pages/Search'
import MoviePage from './pages/MoviePage'
import TVShowsPage from './pages/TVShowsPage'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <div>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Sign_in/>} />
        <Route path='/signup' element={<Sign_up/>} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/movies' element={<MoviePage/>} />
        <Route path='/tvseries' element={<TVShowsPage/>} />
      </Routes>
    </main>
    </div>
    </ErrorBoundary>
  )
}
export default App
