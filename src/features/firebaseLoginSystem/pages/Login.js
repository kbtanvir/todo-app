import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInUser, logoutUser, googleSignin } from "../settings/authReqs";
import { selectAuth, setStatus } from "../settings/authSlice";
import { useHistory } from "react-router-dom";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import { auth, uiConfig } from "../settings/firebase";
export default function Login() {
  const {
    user: { email, isLoggedIn },
    status: { message },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  // isLoggedIn && history.push("/account");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      setStatus({
        message: "Logging in",
        error: false,
        loading: true,
      })
    );
    dispatch(
      signInUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    if (isLoggedIn) history.push("/account");
  }
  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Login </h2>
          <p>{isLoggedIn ? email : null}</p>
          <p>{message}</p>

          {isLoggedIn ? (
            // if logged in
            <>
              <button
                onClick={() => dispatch(logoutUser())}
                disabled={!isLoggedIn}
                type="submit"
              >
                Logout
              </button>
            </>
          ) : (
            // if logged in
            <>
              <form onSubmit={handleSubmit}>
                <div id="email">
                  <label>Email</label>
                  <input type="email" ref={emailRef} required />
                </div>
                <div id="password">
                  <label>Password</label>
                  <input type="password" ref={passwordRef} required />
                </div>

                <button disabled={isLoggedIn} className="w-100" type="submit">
                  Login
                </button>
              </form>
              <button
                onClick={() => dispatch(googleSignin())}
                disabled={isLoggedIn}
                type="submit"
              >
                Signin with google
              </button>
            </>
          )}

          {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}
        </div>
      </div>
      <div>
        {/* Already have an account? <Link to="/login">Log In</Link> */}
      </div>
    </>
  );
}
