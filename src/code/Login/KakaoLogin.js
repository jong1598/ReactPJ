
import kakao_login_image from '../../source/kakao_login.png'
import { IsNullOrEmpty } from '../common/function/DataUtill';

function NaverLogin(props) {
    const { Kakao } = window;

    if (!Kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID);
    }

    const loginWithKakao = () => {
        Kakao.Auth.loginForm({
            success: function (authObj) {
                if (!IsNullOrEmpty(authObj) && Object.keys(authObj).includes('access_token') && !IsNullOrEmpty(authObj['access_token'])) {
                    Kakao.API.request({
                        url: "/v2/user/me",
                        success: function (res) {
                            let access_token = authObj['access_token']
                            let properties = res['properties']
                            let user_info = { id: '', pwd: ' ', name: properties.nickname, company: '', dept: '', rank: '', age: '', token: access_token, profile_image: properties.profile_image }
                            props.loginOper(user_info)
                        }
                    });
                }
            },
        });
    }

    return (
        <div>
            <img
                alt="카카오 로그인"
                src={kakao_login_image}
                width="231.19"
                height="50"
                style={{ marginTop: '10px', cursor: 'pointer', border: '1px solid #e4e4e4', borderRadius: '15px' }}
                onClick={loginWithKakao}
            />
        </div>

    )
}


export default NaverLogin;