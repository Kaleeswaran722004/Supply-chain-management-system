// import logo from './logo.svg';
// import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Login } from './component/Login';
import {Signup} from './component/Signup';
import { Auth } from './component/Auth';
import { Protected } from './component/Protected';
import Nomatch from './component/Nomatch';
import Home from './component/Home';
import { Profile } from './component/Profile';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import { Admin } from './component/Admin';
import { User } from './component/User';



function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<Protected>
          <User/>
        </Protected>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Admin' element={<Protected><Admin/></Protected>}/>
        <Route path='/profile' element={<Protected><Profile/></Protected>}/>
          
      
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;