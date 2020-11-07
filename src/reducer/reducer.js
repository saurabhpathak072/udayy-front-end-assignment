const { GET_USER } = require("../Actions/action");
const initialstate={
    user:''
}
const reducer =(state=initialstate,action)=>{
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                user:action.user
            }
        default:
        return state;
    }
}

export default reducer;