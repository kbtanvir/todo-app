import { useEffect } from "react";
import { auth } from "./firebase";
import { setCurrentUser, setStatus } from "./authSlice";
import { useDispatch } from "react-redux";

export function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    let subscribe = auth.onAuthStateChanged(user => {
      if (user) {
        let userEmail = user.email;
        dispatch(setCurrentUser({ email: userEmail, isLoggedIn: true }));
        dispatch(
          setStatus({
            message: "You are logged in",
            error: false,
          })
        );
        // return;
      }
    });
    return subscribe;
  });
}
