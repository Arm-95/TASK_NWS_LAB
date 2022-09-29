import {GET_CATEGORIES, SELECT_CATEGORY} from "../types"
import {API_URI} from '../../utils/keys'
import getData from "../Service"

export function getCategories() {
    return async (dispatch: DispatchType) => {
        getData(`${API_URI}/categories`)
            .then((data) => {
                dispatch({
                    payload: data,
                    type: GET_CATEGORIES
                });
            })
    }
}

export function selectCategory(category:category | undefined){
    return (dispatch:DispatchType) =>{
        dispatch({
            payload:category,
            type:SELECT_CATEGORY
        })
    }
}
