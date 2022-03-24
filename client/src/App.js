import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import WriteaBlog from './pages/WriteaBlog'
import Header from './pages/Header'

function App(){
	return (
	<>

 <BrowserRouter>
 {/* <Header title="My Way"/> */}
      <Routes>
     <Route  path="/" element={<Login/>}></Route>
     <Route  path="/home" element={<Home/>} ></Route>
     <Route  path="/Writeablog" element={<WriteaBlog/>} ></Route>
     {/* <Route  path="/home" element={<Home/>} ></Route> */}
      </Routes>
				
			</BrowserRouter>


  
  
  </>
    

	);
}

export default App;
