import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Register(){
    let [name,setName]=useState("")
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [role, setRole] = useState("")

    let [error,setError]=useState("")

    let navigate=useNavigate()

    let handleRegister=async(event)=>{
        event.preventDefault()
        let res=await fetch("http://localhost:3000/api/emp/register",
            {
            method:"POST", 
            headers:{'content-Type':"application/json"},
            body:JSON.stringify({name,emailid,password,role})
            });
        let data=await res.json()
        if(res){
            console.log("data registered success")
            console.log(data);
        }else{
            console.log("data insertion failed")
            console.log(data);
        }

        if(emailid=="admin@gmail.com" && password=="admin"){
            navigate("/login")
        }
        else{
            setError("Invalid email,password")
        }
    }
    return(
    <div>
        <form onSubmit={handleRegister}>

            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter username"></input><br/>
            <input type="text" onChange={(e)=>setEmailid(e.target.value)} value={emailid} placeholder="Enter emailid"></input><br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password"></input><br/>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Choose role</option>
                <option value="EMPLOYEE">Employee</option>
                <option value="HR">HR</option>
            </select><br/>
            
            <button type="submit">Register</button>
        </form>
    </div>
    )
}

export default Register