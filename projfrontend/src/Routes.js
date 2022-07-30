import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './core/Home';
export default function MyRoutes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
