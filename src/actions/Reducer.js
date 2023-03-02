let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ""

export const initialState = {

    user: "" || user,
    isLogin: false 
}

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "SUCCESS_LOGIN":
            return {
                ...initialState,
                isLogin: true,
                user:action.user
            }
        case "LOGOUT":
            return {
               ...initialState,
                isLogin: false
            }
        default:
            return {
                email: '',
                pass: '',
                isLogin: false
            }
    }
}