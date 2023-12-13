import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import './index.css'

const SignUp = () => {

    const [email,setEMail] = useState()

    const [name,setName] = useState()

    const [password,setPassword] = useState()

    const navigate = useNavigate()

    const onChangeEmail = event =>{
        setEMail(event.target.value)
    }

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const onClickRegister = event => {
        event.preventDefault()
        axios.post('http://localhost:3002/register',{name,password,email})
        .then(result=>{
            console.log(result)
            navigate("/login")
        })
        .catch(err=> console.log(err))
    }
    

    return(
    <div className='signup-container'>
        <form className='form-container' onSubmit = {onClickRegister}>
            <h1 className='main-heading'>Register</h1>
            <label htmlFor='emailId' className='input-label'>EMAIL</label><br/>
            <input value ={email} 
            id='emailId'
             type ='email' 
             className='user-input' 
             placeholder = "Enter email" onChange = {onChangeEmail} /><br/>
            <label htmlFor= "nameId" className='input-label'>USERNAME</label><br/>
            <input value={name} id = "nameId" type = "text" 
            className='user-input'  placeholder = "Enter Name" onChange = {onChangeName} /><br/>
            <label htmlFor = "passwordId" className='input-label'>PASSWORD</label><br/>
            <input value= {password} id = "passwordId" type = "password" 
            className='user-input'  placeholder = "Enter password" onChange = {onChangePassword} /><br/>
            <button type = "submit" className='button'>Register</button>
            <p>already</p>
            <Link to = "/login"><button className='button'>LogIn</button></Link>
        </form>

    </div>
)
    }
export default SignUp