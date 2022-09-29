import {GET_IMAGES, SET_PAGE, RESET} from "../types"
import {API_URI} from '../../utils/keys'
import getData from "../Service"

export function getImages(category:category, page:number) {
    return async (dispatch: DispatchType) => {
        getData(`${API_URI}/images/search?limit=10&page=${page}${category? `&category_ids=${category.id}`: ''}`)
            .then((data) => {
                dispatch({
                    payload: data,
                    type: GET_IMAGES
                });
            })
    }
}

export function setPage() {
    return (dispatch: DispatchType) => {
        dispatch({
                payload: null,
                type: SET_PAGE
            }
        );
    }
}

export function reset() {
    return (dispatch: DispatchType) => {
        dispatch({
                payload: null,
                type: RESET
            }
        );
    }
}
