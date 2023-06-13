import {useRoutes} from "react-router-dom";
import React, {Component, Suspense} from "react";

const FlashCardCarousel = React.lazy(() => import('../pages/FlashcardCarousel/FlashcardsCarousel'));
const ManageFlashcards = React.lazy(() => import('../pages/ManageFlashcards/ManageFlashcards'));
const Layout = React.lazy(()=> import('../pages/Layout'));
const Home =React.lazy(()=>import('../pages/Home/Home'));
const WorkInProgress =React.lazy(()=>import('../pages/WorkInProgress/WorkInProgress'));
const LogIn =React.lazy(()=>import('../pages/Authentication/LogIn'));
const SignUp =React.lazy(()=> import('../pages/Authentication/SignUp'))




const loading = () => <div>>Loading...</div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>,
};


const LoadComponent = ({component: Component}:LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component/>
    </Suspense>
)

export const AllRoutes = () => {

    return useRoutes([
        {
            path:'/',
            element: <LoadComponent component={Layout}/>,
            children: [
                {
                    path:'flashcards',
                    element: <LoadComponent component={FlashCardCarousel}/>
                },
                {
                    path: 'manage',
                    element: <LoadComponent component={ManageFlashcards}/>
                },
                {
                    path: 'home',
                    element: <LoadComponent component={Home}/>
                },
                {
                    path: 'workinprogress',
                    element: <LoadComponent component={WorkInProgress}/>
                },
                {
                    path: 'login',
                    element: <LoadComponent component={LogIn}/>
                },
                {
                    path: 'signup',
                    element: <LoadComponent component={SignUp}/>
                },
                {
                    path: '/',
                    element: <LoadComponent component={Home}/>
                }
            ]
        }
    ])
}