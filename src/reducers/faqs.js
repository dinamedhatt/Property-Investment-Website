export function faqs(state={},action) {
    if(action.type==='FAQ_LIST'){
            return {...state,list:action.payload}
        }
else{
            return state
        }
       
}
