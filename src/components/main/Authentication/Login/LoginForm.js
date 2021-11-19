import React, { useRef, useState, useReducer } from "react";
import classes from "./LoginForm.module.css";

function emailReducer(state, action) {
  if (action.type === "LOGIN_EMAILINPUT") {
    return {
      value: action.value,
      isEmailValid: action.isEmailValid,
    };
  } else if (action.type === "LOGIN_EMAILINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isEmailValid: state.isEmailValid,
    };
  } else
    return {
      value: "",
      isEmailValid: "",
    };
}

function passwordReducer(state, action) {
  if (action.type === "LOGIN_PASSWORDINPUT") {
    return {
      value: action.value,
      isPasswordValid: action.isPasswordValid,
    };
  } else if (action.type === "LOGIN_PASSWORDINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isPasswordValid: state.isPasswordValid,
    };
  }
  return {
    value: "",
    isPasswordValid: false,
  };
}

function LoginForm() {
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  const [userEmail, dispatchUserEmail] = useReducer(emailReducer, {
    value: "",
    isEmailValid: false,
  });

  const [userPassword, dispatchUserPassword] = useReducer(passwordReducer, {
    value: "",
    isPasswordValid: false,
  });

  function emailChangeHandler(event) {
    let enteredEmail = event.target.value.trim();

    function validateEmail(email) {
      //validate email. source: stackoverflow =)). try: not yet
      const result =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return result.test(email);
    }
    dispatchUserEmail({
      type: "LOGIN_EMAILINPUT",
      value: enteredEmail,
      isEmailValid: validateEmail(enteredEmail),
    });
  }

  function emailValidation() {
    dispatchUserEmail({ type: "LOGIN_EMAILINPUT_LOSTFOCUS" });
  }

  function passwordChangeHandler(event) {
    let enteredPassword = event.target.value;

    function validatePassword(password) {
      let result = password.includes(""); //not done
    }

    dispatchUserPassword({
      type: "LOGIN_PASSWORDINPUT",
      value: enteredPassword,
      isPasswordValid: validatePassword(),
    });
    //setUserPassword(event.target.value);
  }

  function passwordValidation(event) {
    dispatchUserPassword({ type: "LOGIN_PASSWORDINPUT_LOSTFOCUS" });
  }

  function submitHandler(event) {
    //sending Request
    console.log(userEmail.value);
    console.log(userPassword);

    //After submitting, empty the value of inputs
    //setUserEmail('');
    //setUserPassword("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Email</label>
        <input
          placeholder="Nhập email"
          type="email"
          value={userEmail.value}
          onChange={emailChangeHandler}
          onBlur={emailValidation}
        />
      </div>
      <div>
        <label>Mật khẩu</label>
        <p>Mật khẩu cần phải có ít nhất 6 ký tự, có ít nhất 1 chữ số</p>
        <input
          placeHolder="Nhập mật khẩu"
          type="password"
          value={userPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordValidation}
        />
      </div>
    </form>
  );
}

export default LoginForm;
