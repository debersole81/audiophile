import React from "react";

function Login (props, state) {
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label> {""}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={state.username}
                    onChange={props.loginHandleChange}
                />
                </label>
                <br />
                <label> {""}
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={props.loginHandleChange}
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