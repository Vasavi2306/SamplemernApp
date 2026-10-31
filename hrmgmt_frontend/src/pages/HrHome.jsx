import { useNavigate } from "react-router-dom"

function HrHome(){
    let navigate=useNavigate()
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))
    //JSON.parse()=>used to json data to string
    let handleLogout=(e)=>{
        localStorage.removeItem("currentuser")//it will remove your data of currentuser
        navigate("/login")
    }
    return(<div>
        <h1>HR home page</h1>
        <h2>Welcome {currentuser.name}</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>)
}
export default HrHome