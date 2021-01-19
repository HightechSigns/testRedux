export const increment = (nr)=>{
    return{
        type:"INCREMENT",
        payload: nr
    };
};
export const decrement = (nr)=>{
    return{
        type:"DECREMENT",
        payload: nr
    };
};
export const signIn = ()=>{
    return{
        type:"SIGN_IN"
    };
};
export const signOut = (f)=>{
    return{
        type:"SIGN_OUT",
        payload: f
    };
};
export const getData = (a)=>{
    return{
        type:"LOAD_DATA",
        payload: a
    };
};