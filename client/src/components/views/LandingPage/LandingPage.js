import React, {useEffect} from 'react';
import axiox from 'axios';

function LandingPage(props) {
    
    useEffect(() => {
        axiox.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            LandingPage 랜딩페이지
        </div>
    );
}

export default LandingPage;