import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useRegister = () => {
  const registerWithEmailAndPassword = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((profile) => {
        console.log("New User Info:", profile.user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return { registerWithEmailAndPassword };
};
