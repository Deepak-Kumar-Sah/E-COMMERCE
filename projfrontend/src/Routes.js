import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/helper/PrivateRoutes';
import AdminRoute from './auth/helper/AdminRoutes';
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories';



export default function MyRoutes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashBoard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard}/>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
                <AdminRoute 
                path="/admin/categories" exact 
                component={ManageCategories}/>

            </Switch>
        </BrowserRouter>
    )
}
