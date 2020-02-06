import React from 'react'
import Header from './headers'
import RegisterForm from './forms/RegisterForm'
import LoginForm from './forms/LoginForm'
import {Route,Switch} from 'react-router-dom'
import {LombdaLandUI} from './lombdaLandUI'
const PublicMainView = (props) =>{

    return(
        <>
        {/* <Header />
        <Switch>
            <Route match path="/register" render={()=><RegisterForm {...props}/>} />
            <Route match pate="/login" render={()=><LoginForm {...props} />} />
        </Switch> */}
        {/* <p>testing</p> */}
        <LombdaLandUI />
        </>
    )
}

export default PublicMainView;