import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

import auth from '../../firebase.init';
import Loading from '../loading/Loading';

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return<Loading></Loading>
    }

    if(!user){
        return <Navigate to="/Login" state={{ from:location }} replace />
    }

    // if (user.providerData[0] !user.emailVerified){

    // }

    return children;
};

export default RequireAuth;