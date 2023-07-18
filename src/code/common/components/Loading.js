import loading_gif from '../../../source/loading.gif'
import { IsNullOrEmpty } from '../function/DataUtill';

function Loading(props) {
    let isOpen = !IsNullOrEmpty(props.isOpen) ? props.isOpen : false
    
    return (
        <div className="loading_background" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
            <img src={loading_gif} alt="로딩중" />
        </div>
    );
  }
  
  export default Loading;
  