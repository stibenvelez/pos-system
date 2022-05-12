

import { useSelector } from 'react-redux'

const useAuth = () => {
    return  auth = useSelector(({ auth }) => auth.auth);
    
}


export default useAuth;