import {BrowserRouter} from "react-router-dom";
import {AllRoutes} from './index';

export const Routes = () => {
    return (
        <BrowserRouter>
                <AllRoutes/>
        </BrowserRouter>
    )
}