import { useState } from 'react'

function Container() {

    const [gb_login, setLoginGb] = useState("ID")

    //event
    const onClickEvent = (type, value) => {
        //로그인 구분값(아이디 : ID, 간편 : Simple)
        if(type === 'tag'){
            setLoginGb(value)
        }
    }

    return (
        <div className="login_container">
            <div className="login_range">
                <ul className="menu">
                    <li className={`menu_item${gb_login === 'ID' ? ' now' : ''}`}>
                        <a href="#gb=ID" className="menu_item_tag" onClick={() => {onClickEvent('tag', 'ID')}}>
                            <span className="menu_item_text">
                                ID 로그인
                            </span>
                        </a>
                    </li>
                    <li className={`menu_item${gb_login === 'Simple' ? ' now' : ''}`}>
                        <a href="#gb=SP" className="menu_item_tag" onClick={() => {onClickEvent('tag', 'Simple')}}>
                            <span className="menu_item_text">
                                간편 로그인
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="panel">
                    <div className="panel_inner">
                        <div className='login_id' style={{ display: gb_login === 'ID' ? '' : 'none' }}>
                            <div className='input'>

                            </div>
                            <div className='input'>

                            </div>
                        </div>
                        <div className='login_simple' style={{display: gb_login === 'Simple' ? '' : 'none'}}>
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
