
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Blog } from './components/Blog'


function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>

            <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/Blog' element={<Blog/>} />
              <Route/>

            </Routes>
      </BrowserRouter>
    </>
   
  )
}

export default App
