import React, {useEffect} from 'react';
import axiox from 'axios';
import { useNavigate } from 'react-router-dom';

function LandingPage(props) {

    let navigate = useNavigate(); 
    
    useEffect(() => {
        axiox.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axiox.get('/api/users/logout')
            .then(response => {
            if (response.data.success) {
                navigate('/login')
            } else {
                alert('로그아웃 실패')
            }
        })
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width:'100%', height:'100vh'
        }}>
            <h2>시작 페이지</h2>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    );
}

export default LandingPage;