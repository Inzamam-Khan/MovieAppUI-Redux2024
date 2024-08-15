import { combineReducers } from "redux";



function searchTerm(state=null,action){
    const {type,payload}=action


    switch(type){
        case "SET_SEARCH_TERM":
            {
                    return state=payload
            }
        
        default:{
            return state;
        }
    }
    

}



export const allReducers=combineReducers({
    searchTerm
})