import axios from 'axios';
import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Navbar.css"

const Navbar = (props) => {
    const [sign, setSign] = useState(true);
    const user = useSelector(state => state.user);
    
    const onClick = () => {
        setSign((prev) => !prev)
    }
    console.log(user.userData);
    
    const onClickLogout = () => {
        axios.get('/api/users/logout')
        .then(response => {
            // console.log(response)
            if(response.data.success) {
                props.history.push("/sign_in")
                } else {
                    alert("Failed to logout")
                }
            })
    }
    
    if (user.userData && !user.userData.isAuth) {
        return (
            <div>
                <nav>
                    <ul className="navbar">
                        <li><Link to="/">플래닛</Link></li>
                        {sign ? (
                            <li><Link to="/sign_in"><button onClick={onClick}>로그인</button></Link></li>
                            ) : (
                            <li><Link to="/sign_up"><button onClick={onClick}>회원가입</button></Link></li>
                        )}      
                    </ul>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav>
                    <ul className="navbar">
                        <li><Link to="/home">{user.userData?user.userData.name:''}의 플래닛</Link></li>
                        <li><button onClick={onClickLogout}>로그아웃</button></li>
                    </ul>
                </nav>
            </div>
            
            )
        }
    };

export default withRouter(Navbar)