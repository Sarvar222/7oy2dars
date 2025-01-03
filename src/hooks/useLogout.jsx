import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";

export function useLogout() {
  const { user } = useSelector((store) => store.user);

  const logout = async () => {
    try {
      // Update user's online status in Firestore
      let ref = doc(db, "users", user.uid);
      await updateDoc(ref, { online: false });

      // Sign out the user
      await signOut(auth);
      toast.success("See you soon!");
    } catch (error) {
      console.error("Error during logout:", error.message);
      toast.error(error.message);
    }
  };

  return { logout };
}
