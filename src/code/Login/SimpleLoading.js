
import { useEffect } from 'react';
import { getNaverLoginParam } from '../common/function/Common';

function SimpleLoading(props) {
    const { naver } = window;

    let gubun = window.location.href.includes("naver=true") ? 'naver' : ''

    let getData = () => {
        window.close()
    }
    //네이버
    if (gubun === 'naver') {
        // 네이버 로그인 기능 및 버튼 구현
        const naverLogin = new naver.LoginWithNaverId(getNaverLoginParam(gubun));

        getData = () => {
            if (window.location.href.includes("access_token")) {
                if (window.location.href.includes("naver=true")) {
                    let access_token = window.location.hash.split('access_token=')[1].split('&')[0]
                    naverLogin.getLoginStatus((status) => {
                        if (status === true) {
                            let user = naverLogin.user
                            let user_info = { id: '', pwd: ' ', name: user.name, company: '', dept: '', rank: '', age: '', token: access_token, profile_image: user.profile_image }
                            window.opener.getSimpleLogin(user_info)
                            window.close()
                        }
                    })
                }
            }
        };
    }


    useEffect(() => {
        getData()
      }, []);


    return (
        <div>
            <div id="naverIdLogin"></div>
        </div>
        
    )
}


export default SimpleLoading;