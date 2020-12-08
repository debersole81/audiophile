import React from "react";

const Login = (props) => {
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label> {""}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                </label>
                <br />
                <label> {""}
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                />
                </label>
                <br />
                <button onClick={props.loginSubmit}>
                    Submit
                </button>
                <br />
            </form>
        </div>
    );
}

export default Login;