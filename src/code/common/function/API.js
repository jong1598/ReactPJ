import { getLoginTable, getOperToken } from "../../../database/DB"

export const callAPI = (method, url, parameter = {}, token) => {
    let api_response = {
        result_code : undefined,
        result_data : undefined,
    }

    let check_token = getOperToken()
    if(url !== 'login'){
        if(check_token !== token){
            api_response['result_code'] = 406
            api_response['result_data'] = '토근이 만료되었습니다.'
            return api_response
        }
    }
    

    if (method === 'GET') {
        if (url === 'login') {
            let table_data = getLoginTable()
            let login_id = parameter['login_id']
            let login_pwd = parameter['login_pwd']

            let result = table_data.filter(data => data.id === login_id && data.pwd === login_pwd);
            if (result.length > 0) {
                api_response['result_code'] = 200
                api_response['result_data'] = { token: check_token, ...result[0] }
            } else {
                api_response['result_code'] = 401
                api_response['result_data'] = '아이디 또는 비밀번호가 올바르지 않습니다.'
            }
        }
    }


    return api_response
}