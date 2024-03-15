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

import { User } from './component/User';
import { Admin } from './component/Admin';

function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<Nomatch/>}/>
        <Route path='/users' element={<Protected>
          <User/>
        </Protected>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Admin' element={<Protected><Admin/></Protected>
          
      }/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;