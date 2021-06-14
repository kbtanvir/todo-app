import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../settings/authReqs";
import { selectAuth } from "../settings/authSlice";

export default function Dashboard() {
  const {
    user: { email, isLoggedIn },
    status: { message },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-center mb-4">Account</h2>
      <p>{isLoggedIn ? email : "Not logged in"}</p>
      <p>{message}</p>

      <button
        onClick={() => dispatch(logoutUser())}
        disabled={!isLoggedIn}
        type="submit"
      >
        Logout
      </button>
    </>
  );
}
