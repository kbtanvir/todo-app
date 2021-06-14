import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNewUser } from "../settings/authReqs";
import { selectAuth, setStatus } from "../settings/authSlice";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Register() {
  const {
    // user: { isLoggedIn },
    status: { message, loading },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  // isLoggedIn && history.push("/account");

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return dispatch(setStatus({ message: "Pasword doesnt match" }));

    dispatch(
      createNewUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    history.push("/account");
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Register </h2>
          <p>{message}</p>

          <form onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <div id="password-confirm">
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
