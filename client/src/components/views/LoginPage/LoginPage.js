import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_action';


function LoginPage(props) {

    const dispatch = useDispatch();
    let navigate = useNavigate();    
    // state 데이터의 변화를 시켜줌
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); // 페이지의 리프레쉬를 막아줌
        // console.log('Email', Email)
        // console.log('Password', Password)

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
            if (response.payload.loginSuccess) {
                // 버전문제로 props.history.push('/')를 쓰면
                // TypeError: Cannot read properties of undefined (reading 'push')에러가 남
                // useNavigate를 사용해 root페이지로 이동
                navigate('/') 
            } else {
                alert('Error')
            }
        })

    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width:'100%', height:'100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column' }} onSubmit={onSubmitHandler}>
                <label>Email</label> <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label> <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button style={{}}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;