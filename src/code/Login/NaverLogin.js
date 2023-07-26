
import { useEffect } from 'react';
import { getNaverLoginParam } from '../common/function/Common';

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


    return (
        <div>
            <div style={{ display: window.location.href.includes('naver=true') ? 'none' : '' }} id="naverIdLogin"></div>
        </div>
        
    )
}


export default NaverLogin;