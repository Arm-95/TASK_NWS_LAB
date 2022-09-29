//styles
import './Images.scss'

import React, {useEffect} from "react"
import { Dispatch } from "redux"
import { useDispatch, shallowEqual,useSelector } from "react-redux"

//custom imports
import { getImages, setPage } from "../../store/actions/imageAction"

type Props = {
}
export const Images: React.FC<Props> = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const images: readonly image[] = useSelector(
        (state: StoreType) => state.image.images,
        shallowEqual
    )
    const page: number = useSelector(
        (state: StoreType) => state.image.page,
        shallowEqual
    )
    const selected: category | null = useSelector(
        (state: StoreType) => state.category.selected,
        shallowEqual
    )
    // @ts-ignore
    useEffect(() => dispatch(getImages(selected,page)), [selected, page, dispatch])

    const handleSetPage = () =>{
        dispatch(setPage())
    }

    return (
        <div className="images">
            <ul >
                {images?.map(image =>{
                    return <li key={image.id}>
                        <img alt={image.id} src={image.url}/>
                    </li>
                })
                }
            </ul>
            {images.length? <button type="button" onClick={handleSetPage}>load more</button> : null}
        </div>
    )
}
export default Images