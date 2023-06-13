import {useRoutes} from "react-router-dom";
import React, {Component, Suspense} from "react";

const FlashCardCarousel = React.lazy(() => import('../pages/FlashcardCarousel/FlashcardsCarousel'));
const ManageFlashcards = React.lazy(() => import('../pages/ManageFlashcards/ManageFlashcards'));
const Layout = React.lazy(()=> import('../pages/Layout'));
const Home =React.lazy(()=>import('../pages/Home/Home'))


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
            ]
        }
    ])
}