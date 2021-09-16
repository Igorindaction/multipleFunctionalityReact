import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from 'router/router';
import Loader from 'UI/loader/Loader';
import { AuthContext } from './context/authContext';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if(isLoading){
        return <Loader />
    }

    return ( 
    <div>
        {isAuth
            ?   <Switch>
                    {PrivateRoutes.map((route, index) => 
                        <Route path={route.path} exact={route.exact} component={route.component} key={index}/>    
                    )}
                    <Redirect to='/about' />    
                </Switch>

            :   <Switch>   
                    {PublicRoutes.map((route, index) => 
                        <Route path={route.path} exact={route.exact} component={route.component} key={index}/>    
                    )}            
                    <Redirect to='/login' />
                </Switch>
        }
    </div>
    )     
};

export default AppRouter;