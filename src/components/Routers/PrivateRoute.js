import { Redirect, Route } from "react-router-dom";
import useAuth from '../Auth/UseAuth'

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
    const auth = useAuth();

    return(
        <Route {...rest}>
            {auth.isLogged() ?
                <RouteComponent />
                :
                <Redirect to="/" />
            }
        </Route>
    );
};