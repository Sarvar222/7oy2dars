import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";
import toast from "react-hot-toast";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  isPending: false,
  error: null,
  success: false,
};

const firestoreReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "IS_PENDING":
      return { ...state, isPending: true, error: null, success: false };
    case "ERROR":
      return { ...state, isPending: false, error: payload, success: false };
    case "SUCCESS":
      return { ...state, isPending: false, success: true };
    default:
      return state;
  }
};

function useFirestore(collectionName) {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);
  const navigate = useNavigate();

  const addDocument = async (data) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await addDoc(collection(db, collectionName), data);
      toast.success("Project added");
      dispatch({ type: "SUCCESS" });
    } catch (error) {
      toast.error(error.code);
      dispatch({ type: "ERROR", payload: error.code });
    }
  };

  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      toast.success("Document successfully deleted!");
      navigate("/");
    } catch (error) {
      toast.error("Error removing document: ", error);
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const updateDocument = async (document, id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, document);
      dispatch({ type: "SUCCESS" });
    } catch (error) {
      toast.error(error.code);
      dispatch({ type: "ERROR", payload: error.code });
    } 
  };

  return { 
    addDocument, 
    deleteDocument, 
    updateDocument, 
    isPending: state.isPending, 
    error: state.error, 
    success: state.success 
  };
}

export { useFirestore };
