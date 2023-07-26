
export const getNaverLoginParam = (gubun) => {

    let clientId = ''
    if (gubun === 'naver') clientId = process.env.REACT_APP_NAVER_CLIENT_ID

    let param = {
        clientId,
        callbackUrl: `http://localhost:3000/login/simple_loading?${gubun}=true`,
        isPopup: true,
        loginButton: {
            color: "green",
            type: 3,
            height: 50,
        },
    }
    return param
}
