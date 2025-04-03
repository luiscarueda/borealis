import './App.css'
import { Dropdown, Footer, Navbar } from './components'
import { Home,Plans,Contact,AllPosts,OnePost, Schedule, About, FullClasses, OneClass} from './pages'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>     
      <BrowserRouter>   
        <Navbar/>              
        <Routes>
         <Route path='/'            index element={<Home/>         }></Route>
         <Route path='/about'             element={<About/>        }></Route> 
         <Route path='/schedule'          element={<Schedule/>     }></Route> 
         <Route path='/enroll'            element={<Plans/>        }></Route>                                        
         <Route path='/contact'           element={<Contact/>      }></Route> 
         <Route path='/allposts'          element={<AllPosts/>     }></Route> 
         <Route path='/fullclasses'       element={<FullClasses/>  }></Route> 
         <Route path='/allposts/:slug'    element={<OnePost />     }></Route>
         <Route path='/fullclasses/:slug' element={<OneClass />    }></Route>                                  
        </Routes>    
       <Footer/>         
      </BrowserRouter>     
    </div>
  )
}

export default App