import './App.css'
import { Footer, Navbar } from './components'
import { Home,About,Plans,Gallery,Contact, AllPosts} from './pages'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>     
       <BrowserRouter>   
       <Navbar/>
       <Routes>
        <Route index element ={<Home/>}></Route>     
        <Route path='about' element={<About/> }></Route>     
        <Route path='plans' element={<Plans/> }></Route>
        <Route path='gallery' element={<Gallery/> }></Route>
        <Route path='contact' element={<Contact/> }></Route> 
        <Route path='allposts' element={<AllPosts/>}></Route>     
       </Routes>    
       <Footer/>         
       </BrowserRouter>     
    </div>
  )
}

export default App