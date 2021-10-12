import React from 'react'
import { Redirect, Route } from "react-router-dom"
import Cookie from "js-cookie"

function index(props) {
    const token = Cookie.get("jwt_token")
    if(token === undefined){
       return <Redirect to="/login"/>
    }else{
        return <Route {...props}/>
    }
}

export default index
