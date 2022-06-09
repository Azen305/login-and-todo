import React from 'react'
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from './Login';
import Todo from './Todo';
import Notuser from './Notuser';

const App = () => {

    const userList=[];
 
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Signup userList={userList}/>} />
              <Route path='/login' element={<Login userList={userList}/>}/>
              <Route path='/todo' element={<Todo/>}/>
              <Route path='/notuser' element={<Notuser/>}/>
          </Routes>
      </Router>
  )
}

export default App