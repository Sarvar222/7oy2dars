import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config";

// uuid
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";

export function useRegister() {
  const dispatch = useDispatch();

  const registerWithEmailAndPassword = async (displayName, email, password) => {
    try {
      // Create user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with displayName and photoURL
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${uuid()}`,
      });

      // Add user details to Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        displayName: displayName,
        id: res.user.uid,
        online: true,
      });

      // Dispatch the user data to Redux store
      dispatch(login(res.user));
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return { registerWithEmailAndPassword };
}
