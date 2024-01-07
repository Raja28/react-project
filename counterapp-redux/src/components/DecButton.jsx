import {useDispatch} from 'react-redux'
import {dec} from '../feature/counter/counterSlice'

export function DecButton(){
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=> dispatch(dec())} >
                Dec
            </button>
        </div>
    )
}