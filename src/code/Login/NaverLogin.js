
import { useEffect } from 'react';
import { getNaverLoginParam } from '../common/function/Common';
import naver_login_image from '../../source/naver_login.png'

function NaverLogin(props) {
    const { naver } = window;

    // 네이버 로그인 기능 및 버튼 구현
    const naverLogin = new naver.LoginWithNaverId(getNaverLoginParam('naver'));

    useEffect(() => {
        naverLogin.init();
        window.getSimpleLogin = (user_info) => {
            props.loginOper(user_info)
        }
    }, []);


    const loginWithNaver = () => {
        let btnNaverLogin = document.getElementById("naverIdLogin").firstChild;
		btnNaverLogin.click();
    }

    return (
        <div>
            <div style={{ display: 'none'}} id="naverIdLogin"></div>
            <img
                alt="네이버 로그인"
                src={naver_login_image}
                width="231.19"
                height="50"
                style={{ marginTop: '10px', cursor: 'pointer', border: '1px solid #e4e4e4', borderRadius: '15px' }}
                onClick={loginWithNaver}
            />
        </div>

    )
}


export default NaverLogin;