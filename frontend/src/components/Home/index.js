import {useNavigate} from 'react-router-dom'

import './index.css'

const Home = () => {
    const navigate = useNavigate()
    const onClickLogout = () => {
        navigate('/login')
    }

    return(
        <div className="home-container">
            <img src ="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?size=626&ext=jpg&ga=GA1.2.516513730.1696175881&semt=ais" 
            className="image" alt = "beach" />
            <button className="button" onClick= {onClickLogout}>LogOut</button>
        </div>
    )
}

export default Home