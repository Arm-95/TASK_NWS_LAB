import {GET_IMAGES,SET_PAGE, RESET} from "../types"

const initialState: ImageState = {
    images: [],
    page:1
}

const imageReducer = (
    state: ImageState = initialState,
    action: CategoryAction
): ImageState => {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.payload]
            }
        case SET_PAGE:
            return {
                ...state,
                page: state.page + 1,
            }
        case RESET:
            return {
                ...state,
                page: 1,
                images:[]
            }
    }
    return state
}

export default imageReducer