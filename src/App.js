import logo from './My-project-1.png';
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import Users from './pages/User/Users';
import AStore from './pages/AStore/AStore';
import Pass from './pages/Pass/Pass';
// import Toolbar from './components/Toolbar/Toolbar';
function App() {
 
   return (  
    <>

   <BrowserRouter basename={process.env.PUBLIC_URL} >
   
    <Routes>
            <Route path='/' element ={ <Home logo={logo} /> } />
            <Route path='/users' element ={<Users logo={logo}  />} />
            <Route path='/pass' element ={<Pass logo={logo} />} />
            <Route path='/admin' element ={ <AStore logo={logo} />  }/>
            
   </Routes>
   </BrowserRouter>
   </> 
  );
}

export default App;
