import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";

export const useLogin = () => {
  const dispatch = useDispatch();
  const loginWithEmailAndPassword = async (email, password) => {
    let res = await signInWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", res.user.uid), {
      displayName: res.user.displayName,
      id: res.user.uid,
      online: true,
    });
    dispatch(login(profile.user));
    toast.success(`Welcome back, ${profile.user.displayName}`);
  };
  return { loginWithEmailAndPassword };
};