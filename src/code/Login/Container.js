import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { callAPI } from '../common/function/API'
import { IsNullOrEmpty } from '../common/function/DataUtill'

function Container() {

    const [gb_login, setLoginGb] = useState("ID")
    const [login_id, setLoginID] = useState("")
    const [login_id_error, setLoginIDError] = useState(false)
    const [login_pwd, setLoginPWD] = useState("")
    const [login_pwd_error, setLoginPWDError] = useState(false)
    const [login_error_msg, setLoginErrorMsg] = useState('')
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies();

    //event
    const onClickEvent = (type, value) => {
        //로그인 구분값(아이디 : ID, 간편 : Simple)
        if (type === 'tag') {
            setLoginGb(value)
        }
    }

    //로그인 작업
    const onLoginClick = () => {
        if (IsNullOrEmpty(login_id)) {
            setLoginIDError(true)
            setLoginPWDError(false)
            setLoginErrorMsg('')
            document.getElementById('login_id').focus()
            return
        }
        if (IsNullOrEmpty(login_pwd)) {
            setLoginPWDError(true)
            setLoginIDError(false)
            setLoginErrorMsg('')
            document.getElementById('login_pwd').focus()
            return
        }

        let login_response = callAPI('GET', 'login', { login_id, login_pwd })
        if (!IsNullOrEmpty(login_response) && login_response.result_code !== 200) {
            setLoginErrorMsg(login_response.result_data)
            return
        }
        const expires = new Date();
        expires.setHours(expires.getHours() + 3)
        setCookie('Auth_Token', login_response.result_data['token'], { expires })
        navigate('/', { state: { login_info: login_response.result_data } })

    }

    const onChangeInput = (gubun) => {
        let id_value = document.getElementById('login_id').value;
        let pwd_value = document.getElementById('login_pwd').value;
        if (gubun === 'ID') {
            setLoginID(id_value)
            if (IsNullOrEmpty(id_value)) {
                setLoginIDError(false)
            }
        } else if (gubun === 'PWD') {
            setLoginPWD(pwd_value)
            if (IsNullOrEmpty(pwd_value)) {
                setLoginPWDError(false)
            }
        }
        if (IsNullOrEmpty(id_value) && IsNullOrEmpty(pwd_value)) {
            setLoginErrorMsg('')
        }
    }

    return (
        <div className="login_container">
            <div className="login_range">
                <ul className="menu">
                    <li className={`menu_item${gb_login === 'ID' ? ' now' : ''}`}>
                        <a href="#gb=ID" className="menu_item_tag" onClick={() => { onClickEvent('tag', 'ID') }}>
                            <span className="menu_item_text">
                                ID 로그인
                            </span>
                        </a>
                    </li>
                    <li className={`menu_item${gb_login === 'Simple' ? ' now' : ''}`}>
                        <a href="#gb=SP" className="menu_item_tag" onClick={() => { onClickEvent('tag', 'Simple') }}>
                            <span className="menu_item_text">
                                간편 로그인
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="panel">
                    <div className="panel_inner">
                        <div className='login_id' style={{ display: gb_login === 'ID' ? '' : 'none' }}>
                            <div className={`input_box${login_id_error || !IsNullOrEmpty(login_error_msg) ? ' error' : ''}`}>
                                <input id="login_id" className={`input`} placeholder="아이디" value={login_id}
                                    onKeyDown={(event) => { if (event.key === 'Enter') onLoginClick() }}
                                    onChange={() => { onChangeInput('ID') }}
                                />
                                <span className='input_error_hint' style={{ display: !IsNullOrEmpty(login_error_msg) ? 'none' : '' }}>아이디를 입력하세요.</span>
                            </div>
                            <div className={`input_box${login_pwd_error || !IsNullOrEmpty(login_error_msg) ? ' error' : ''}`}>
                                <input id="login_pwd" className={`input`} placeholder="비밀번호" value={login_pwd} type="password"
                                    onKeyDown={(event) => { if (event.key === 'Enter') onLoginClick() }}
                                    onChange={() => { onChangeInput('PWD') }}
                                />

                                <span className='input_error_hint'>{!IsNullOrEmpty(login_error_msg) ? login_error_msg : '비밀번호를 입력하세요.'}</span>
                            </div>
                            <div className='btn_box'>
                                <button className='btn' onClick={onLoginClick}>
                                    로그인
                                </button>
                            </div>
                        </div>
                        <div className='login_simple' style={{ display: gb_login === 'Simple' ? '' : 'none' }}>
                            간편로그인으로
                        </div>
                    </div>
                </div>
            </div>
            <div className="join_range">
            </div>
        </div>
    );
}

export default Container;
