import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsNullOrEmpty } from '../function/DataUtill';
import user_default from '../../../source/user_default.png'
import logout_png from '../../../source/logout.png'
import { useCookies } from 'react-cookie';

function Header(props) {
    const detailRef = useRef()
    const [isOpen_Detail, setIsOpenDetail] = useState(false)
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleClickOutside = ({ target }) => {
        if (!IsNullOrEmpty(detailRef.current) && !detailRef.current.contains(target)) {
            setIsOpenDetail(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, []);


    let target = props.target
    let login_info = props.login_info

    const onClickEvent = (gubun) => {
        if (gubun === 'login') {
            navigate('/login')
        } else if (gubun === 'portfolio') {
            navigate('/portfolio', { state: { login_info } })
        } else if (gubun === 'project') {
            navigate('/project', { state: { login_info } })
        } else if (gubun === 'study') {
            navigate('/study', { state: { login_info } })
        } else if (gubun === 'intro') {
            navigate('/intro', { state: { login_info } })
        } else if (gubun === 'main') {
            navigate('/', { state: { login_info } })
        } else if (gubun === 'detail') {
            if (isOpen_Detail === true) {
                setIsOpenDetail(false)
            } else {
                setIsOpenDetail(true)
            }
        }
    }

    return (
        <div className="header">
            <div className="header_box">
                <div className="header_img_box"
                    onClick={() => { onClickEvent('main') }}
                />
                <ul className="header_ul">
                    <li className={`header_li${target === 'portfolio' ? ' now' : ''}`}
                        onClick={() => { onClickEvent('portfolio') }}
                    >
                        <span className="header_li_text">이력서</span>
                    </li>
                    <li className={`header_li${target === 'project' ? ' now' : ''}`}
                        onClick={() => { onClickEvent('project') }}
                    >
                        <span className="header_li_text">프로젝트</span>
                    </li>
                    <li className={`header_li${target === 'study' ? ' now' : ''}`}
                        onClick={() => { onClickEvent('study') }}
                    >
                        <span className="header_li_text">공부</span>
                    </li>
                    <li className={`header_li${target === 'intro' ? ' now' : ''}`}
                        onClick={() => { onClickEvent('intro') }}
                    >
                        <span className="header_li_text">자기소개</span>
                    </li>
                </ul>
                <ul>
                    {
                        !IsNullOrEmpty(login_info) ?
                            <li className={`header_user${isOpen_Detail ? ' open' : ''}`}
                                onClick={() => { onClickEvent('detail') }}
                                ref={detailRef}
                            >
                                <img className='header_user_profile' src={!IsNullOrEmpty(login_info['profile_image']) ? login_info['profile_image'] : user_default} alt="이미지" />
                                <span className='header_user_name'>{`${login_info['name']}`}</span>
                                <div className='header_user_detail'
                                    onClick={(event) => { event.stopPropagation() }}
                                >
                                    <div className='detail_top'>
                                        <button className='btn_logout'
                                            onClick={() => {
                                                removeCookie('Auth_Token')
                                                props.logoutOper()
                                            }}
                                        >
                                            <img className='img_logout' src={logout_png} alt="" />
                                        </button>
                                        <span style={{ display: 'grid', width: '100%', fontWeight: 'bold' }}>{`${login_info['name']} ${login_info['rank']}`}</span>
                                    </div>
                                    <div className='detail_bottom'>

                                    </div>
                                </div>
                            </li>
                            :
                            <li className={`header_login`}
                                onClick={() => { onClickEvent('login') }}
                            >
                                로그인
                            </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;
