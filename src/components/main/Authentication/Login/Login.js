import React, { Fragment } from "react";
import classes from "./Login.module.css";
import Navigation from "../../../header/Navigation/Navigation";
import LoginForm from "./LoginForm";

function Login() {
    const getDataFromLogin = function (email, password) {
        const data =  {
            userEmail: email,
            userPassword: password
        }
        console.log(data);
    }
    return (
        <div className={classes["login-background"]}>
            <Navigation />
            <LoginForm onGetData={getDataFromLogin}/>
        </div>
    )
}

export default Login;