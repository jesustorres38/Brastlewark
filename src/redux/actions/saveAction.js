//action que guarda los datos
const save = (data) => {
    return (dispatch) => {
        return dispatch({
            type: 'SAVE_INFO',
            data: data
        });
    }
}

export default {save}