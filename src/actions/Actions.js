export function LoginUser(dispatch, loginPayload) {
    const userData = {
        email: loginPayload.email,
        pass: loginPayload.password
    }

    console.log(userData, "userData")
    if (userData.email === 'pulu@index.co' && userData.pass === '12345') {
        dispatch({
            type: "SUCCESS_LOGIN",
            user: userData
        })
        localStorage.setItem('user', JSON.stringify(userData))
        return userData
    } else if (userData.email !== 'pulu@index.co' || userData.pass !== '12345') {
        dispatch({
            type: "REQUEST_LOGIN",
            user: 'wrong email or password'
        })
        localStorage.setItem('user', JSON.stringify('wrong email or password'))
        return userData
    }
}

export function Logout(dispatch) {
    dispatch({
        type: "LOGOUT",
        payload: {
            email: '',
            pass: ''
        }
    })
}