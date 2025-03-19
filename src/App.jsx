import './App.css'
import { Footer, Navbar } from './components'
import { Home,Plans,Gallery,Contact,AllPosts,OnePost, Schedule, Story} from './pages'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>     
      <BrowserRouter>   
        <Navbar/>
        <Routes>
         <Route path='/'         index element={<Home/>       }></Route>
         <Route path='/schedule'       element={<Schedule/>   }></Route> 
         <Route path='/enroll'         element={<Plans/>      }></Route>                                          
         <Route path='/gallery'        element={<Gallery/>    }></Route>
         <Route path='/contact'        element={<Contact/>    }></Route> 
         <Route path='/allposts'       element={<AllPosts/>   }></Route> 
         <Route path='/allposts/:slug' element={<OnePost />   }></Route> 
         <Route path='/story'          element={<Story/>      }></Route>
        </Routes>    
       <Footer/>         
      </BrowserRouter>     
    </div>
  )
}

export default App