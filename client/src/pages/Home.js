import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../Css/Home.css'
import PropTypes from 'prop-types'
import logo from '../Images/1.png'

export default function Home(props) {


  // useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if (token) {
	// 		const user = jwt.decode(token)
	// 		if (!user) {
	// 			localStorage.removeItem('token')
	// 			history.replace('/login')
	// 		} else {
  //       window.location.href = '/home'
	// 		}
	// 	}
	// }, [])


    return (
        <>
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/home"><img className='myWayimage' src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Blogs">Blogs</Link>
          </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/WriteaBlog">Write a Blog</Link>
          </li>

      </ul>
    </div>
  </div>
</nav>
        </>
        <>
        <header className="header">
        <div className="content">
            <h1 className="heading">
                <span className="small">welcome in the world of</span>

                <span className="no-fill"> blockchain</span>
            </h1>
            <Link to="/WriteaBlog" className="btn">write a blog</Link>
        </div>
    </header>
        </>
        
        
        
        
        
        </>
        
    )
}
