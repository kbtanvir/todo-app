import { auth, provider } from "./firebase";
import { setCurrentUser, setStatus } from "./authSlice";
// create new user
export const createNewUser = ({ email, password }) => dispatch => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(
      dispatch(setStatus({ message: "Loading", error: false, loading: true }))
    )
    .catch(error =>
      dispatch(setStatus({ message: error.message, error: true }))
    );
};
// sign in with email and password
export const signInUser = ({ email, password }) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)

    .catch(error =>
      dispatch(setStatus({ message: error.message, error: true }))
    );
};
// sign in with google authorization
export const googleSignin = () => dispatch => {
  auth
    .signInWithPopup(provider)
    .then(result => {
      var token = result.credential.accessToken;
      // console.log(result);
      dispatch(
        setCurrentUser({
          token,
          isLoggedIn: true,
        })
      );
      // var user = result.user;

      // console.log(token);
      // console.log(user);
    })
    .catch(error => {
      dispatch(setStatus({ message: error.message, error: true }));
    });
};
// logout user
export const logoutUser = () => dispatch => {
  auth.signOut().then(() => {
    dispatch(
      setStatus({
        message: "Logged out",
        error: false,
        loading: false,
      })
    );
    dispatch(setCurrentUser({ token: null, isLoggedIn: false }));
  });
};
