import React, { useRef, useState } from "react";

function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function emailChangeHandler(event) { 
        //adding code for validation before set
        setUserEmail(event.target.value);
    } 

    function submitHandler(event) { //sending Request
        console.log(userEmail);
        console.log(userPassword);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Email</label>
                <input placeholder="Enter your email" type="email" value={userEmail} onChange={emailChangeHandler} />
            </div>
            <div>
                <label>Password</label>
                <input placeHolder="Enter your password" type="password" value={userPassword} />
            </div>
        </form>
    )
}

export default LoginForm;