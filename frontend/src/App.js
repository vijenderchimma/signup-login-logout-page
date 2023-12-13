import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import './App.css'

const App = () =>(
  <BrowserRouter>
  <Routes>
    <Route path = "/login" element = {<LogIn />}></Route>
    <Route path = "/" element = {<Home />} ></Route>
    <Route path = "/signup" element = {<SignUp />}></Route>
  </Routes>
  </BrowserRouter>
)


export default App;
