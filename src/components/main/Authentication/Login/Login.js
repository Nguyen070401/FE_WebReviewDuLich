import React, { Fragment } from "react";
import classes from "./Login.module.css";
import Navigation from "../../../header/Navigation/Navigation";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <Fragment>
            <Navigation />
            <LoginForm />
        </Fragment>
    )
}

export default Login;