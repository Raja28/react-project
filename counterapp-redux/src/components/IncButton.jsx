import {useDispatch} from 'react-redux'
import {add} from '../feature/counter/counterSlice'

export function IncButton(){
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=> dispatch(add())} >
                Inc
            </button>
        </div>
    )
}