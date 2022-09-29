import {GET_CATEGORIES, SELECT_CATEGORY} from "../types"

const initialState: CategoryState = {
    categories: [],
    selected:null
}

const categoryReducer = (
    state: CategoryState = initialState,
    action: CategoryAction
): CategoryState => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case SELECT_CATEGORY:
            return {
                ...state,
                selected: action.payload,
            }
    }
    return state
}

export default categoryReducer