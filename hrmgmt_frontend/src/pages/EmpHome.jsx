import { useNavigate } from "react-router-dom"

function EmpHome(){
    let navigate=useNavigate()
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))

    let handleLogout=(e)=>{
        localStorage.removeItem("currentuser")//it will remove your data of currentuser
        navigate("/login")
    }
    return(
        <div>
            <h1>Employee home</h1>
            <h2>Welcome {currentuser.name}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default EmpHome