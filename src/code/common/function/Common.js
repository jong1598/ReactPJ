
export const getNaverLoginParam = () => {
    let param = {
        clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
        callbackUrl: `http://localhost:3000/login/simple_loading?naver=true`,
        isPopup: true,
        loginButton: {
            color: "green",
            type: 3,
            height: 50,
        },
    }
    return param
}
