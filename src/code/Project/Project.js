import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../common/components/Header';
import { IsNullOrEmpty } from '../common/function/DataUtill';
import { useCookies } from 'react-cookie';


function Project() {

  const location = useLocation();
  let [login_info, setLoginInfo] = useState({})
  const [cookies] = useCookies();

  useEffect(() => {
    if(!IsNullOrEmpty(location.state) && Object.keys(location.state).includes('login_info')){
      setLoginInfo(location.state.login_info)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutOper = () => { setLoginInfo({}) }

  if(IsNullOrEmpty(cookies.Auth_Token)){
    login_info = {}
  }

  return (
    <div className="pj">
      <Header
        target={'project'}
        login_info={login_info}
        logoutOper={logoutOper}
      />
    </div>
  );
}

export default Project;
