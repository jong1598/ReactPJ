import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../common/components/Header';
import { IsNullOrEmpty } from '../common/function/DataUtill';


function Main() {

  const location = useLocation();
  const [login_info, setLoginInfo] = useState({})

  useEffect(() => {
    if(!IsNullOrEmpty(location.state) && Object.keys(location.state).includes('login_info')){
      setLoginInfo(location.state.login_info)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pj">
      <Header/>
      <p>
        
        {login_info['id']}
      </p>
    </div>
  );
}

export default Main;
