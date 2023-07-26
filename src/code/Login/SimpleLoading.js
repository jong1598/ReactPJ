
import { useEffect, useState } from 'react';
import { getNaverLoginParam } from '../common/function/Common';

function SimpleLoading(props) {
    const { naver } = window;

    const [isError, setIsError] = useState(false)

    // 네이버 로그인 기능 및 버튼 구현
    const naverLogin = new naver.LoginWithNaverId(getNaverLoginParam());

    const getData = () => {
        if (window.location.href.includes("access_token")) {
            if (window.location.href.includes("naver=true")) {
                let access_token = window.location.hash.split('access_token=')[1].split('&')[0]
                naverLogin.getLoginStatus((status) => {
                    if (status === true) {
                        let user = naverLogin.user
                        let user_info = { id: '', pwd: ' ', name: user.name, company: '', dept: '', rank: '', age: '', token: access_token, profile_image: user.profile_image }
                        window.opener.getSimpleLogin(user_info)
                        window.close()
                    } else {
                        setIsError(true)
                    }
                })
            }
        }
    };

    useEffect(() => {
        getData()
    }, []);


    return (
        <div>
            <div id="naverIdLogin"></div>

            {
                isError === true ?
                    <div>네이버 로그인중 오류가 발생하였습니다.</div>
                    :
                    <div></div>
            }
        </div>

    )
}

export default SimpleLoading;