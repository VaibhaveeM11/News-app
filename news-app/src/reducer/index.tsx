export const reducers = (state={},action:any) => {
    switch(action.type)
     {
        case 'GET_NEWS':
            return {...state, loading:true}
        case 'NEWS_RECEIVED':
             return { ...state,news: action.data[0], loading:false}
        default: return state
    }

}