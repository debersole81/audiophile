import React from "react";

function SignIn () {
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
                <button>
                    Submit
                </button>
                <br />
            </form>
        </div>
    );
}

export default SignIn;