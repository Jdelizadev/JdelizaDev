
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Blog } from './components/Blog'


function App() {

  return (
    <>
      <HashRouter>
          <NavBar/>

            <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/Blog' element={<Blog/>} />
              <Route/>

            </Routes>
      </HashRouter>
    </>
   
  )
}

export default App
