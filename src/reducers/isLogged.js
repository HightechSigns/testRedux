const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state
        case "SIGN_OUT":
            return action.payload
        default:
            return state;
    }
}
export default loggedReducer;