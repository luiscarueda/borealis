import './App.css'
import { Footer, Navbar } from './components'
import { Home,Plans,Contact,AllPosts,OnePost, Schedule,Classes, About} from './pages'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>     
      <BrowserRouter>   
        <Navbar/>
        <Routes>
         <Route path='/'         index element={<Home/>       }></Route>
         <Route path='/about'          element={<About/>      }></Route> 
         <Route path='/schedule'       element={<Schedule/>   }></Route> 
         <Route path='/enroll'         element={<Plans/>      }></Route>                                        
         <Route path='/contact'        element={<Contact/>    }></Route> 
         <Route path='/allposts'       element={<AllPosts/>   }></Route> 
         <Route path='/allposts/:slug' element={<OnePost />   }></Route>         
         <Route path='/classes'        element={<Classes/>    }></Route>                           
        </Routes>    
       <Footer/>         
      </BrowserRouter>     
    </div>
  )
}

export default App