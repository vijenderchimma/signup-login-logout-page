import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import './index.css'

const LogIn  = () => {

    const [email,setEMail] = useState()

    const [password,setPassword] = useState()

    const navigate = useNavigate()

    const onChangeEmail = event =>{
        setEMail(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const onClickRegister = event => {
        event.preventDefault()
        axios.post('http://localhost:3002/login',{password,email})
        .then(result=>{
            console.log(result)
            if(result.data === "Success"){
                navigate("/")
            }
        })
        .catch(err=> console.log(err))
    }
    

    return(
    <div className='signup-container'>
        <form className='form-container' onSubmit = {onClickRegister}>
            <h1 className='main-heading'>LogIn</h1>
            <label htmlFor='emailId' className='input-label'>EMAIL</label><br/>
            <input value ={email} 
            id='emailId'
             type ='email' 
             className='user-input' 
             placeholder = "Enter email" onChange = {onChangeEmail} /><br/>
            <label htmlFor = "passwordId" className='input-label'>PASSWORD</label><br/>
            <input value= {password} id = "passwordId" type = "password" 
            className='user-input'  placeholder = "Enter password" onChange = {onChangePassword} /><br/>
            <button className='button'>LogIn</button>
            <p>User Not found</p>
            <Link to = "/signup"><button className='button'>SignUp</button></Link>
        </form>
    </div>
)
    }
export default LogIn