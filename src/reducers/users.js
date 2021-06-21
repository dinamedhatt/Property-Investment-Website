export function users(state={},action) {
    if(action.data){
            return {...state,list:action.data}
        }
else{
            return state
        }
}
