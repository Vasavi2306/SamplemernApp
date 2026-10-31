import './Header_com.css'

import { Link,useLocation,useNavigate } from 'react-router-dom'

function Header_components(){
  useLocation() //reload the menubar
  let currentuser=JSON.parse(localStorage.getItem("currentuser") || "null")
  let navigate=useNavigate()
  let handleLogout=(e)=>{
    localStorage.removeItem("currentuser")
    navigate("/login")
  }
  return(
    <div>
      <div className="header">
      {/* common menus */}
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>
      {/* if not logged in */}
      {!currentuser && (
      <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
      )}
      {/* if loggeg in as hr */}
      {currentuser && currentuser.role=="HR" && (
        <div>
          <Link to="#">Assign task</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {/* if loggeg in as emp */}
      {currentuser && currentuser.role=="EMPLOYEE" && (
        <div>
          <Link to="#">view task</Link>
          <button onClick={handleLogout}>Logout</button>
          </div>
      )}
      </div>
    </div>
  )
}
export default Header_components