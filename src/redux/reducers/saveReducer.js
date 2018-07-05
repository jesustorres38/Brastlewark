const infoReducer = (state = {data: []}, action) => {

    if(action.type === 'SAVE_INFO'){
        return {
            data: action.data
        }
    }
    //sino retorna el estado
    return state;
    
}

export default infoReducer;