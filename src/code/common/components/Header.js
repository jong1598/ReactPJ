import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();

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
                    <li className={`header_login`}
                        onClick={() => { onClickEvent('login') }}
                    >
                        로그인
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
