

import { useDispatch, useSelector } from 'react-redux'
import { AuthAction } from '../actions/authAction';

const useAuth = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const autenticate = dispatch(AuthAction())
        autenticate()
    }, [])
    
 return 'holamundo'   
}


export default useAuth;