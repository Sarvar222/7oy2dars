import { useParams } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { useState, useEffect } from "react";
import { doc, getDoc, collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

function About() {
  const [project, setProject] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { isPending, deleteDocument, updateDocument } = useFirestore("projects");
  const { id } = useParams();

  // Fetch project details
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProject(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchProject();
  }, [id]);

  // Fetch chat messages in real-time
  useEffect(() => {
    const messagesRef = collection(db, "projects", id, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [id]);

  // Send a new message
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const messagesRef = collection(db, "projects", id, "messages");
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: new Date(),
      });
      setNewMessage(""); // Clear input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="card bg-gradient-to-b from-green-800 to-green-600 text-neutral-content w-[500px] mx-auto mt-10">
        <div className="card-body">
          <div className="flex items-center">
            <h2 className="card-title text-2xl uppercase">{project.name}</h2>
            <h3 className="text-xl flex ml-auto">{project.projectType}</h3>
          </div>
          <p className="w-full p-2 bg-green-400 text-black rounded-md mt-2">{project.description}</p>
          <div className="card-actions flex justify-center gap-10 mt-4">
            <button
              className="py-2 px-4 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700"
              onClick={() => updateDocument(project.id)}
            >
              Completed Project
            </button>
            <button
              className="py-2 px-4 bg-red-600 text-white rounded-lg font-semibold shadow-md hover:bg-red-700"
              onClick={() => deleteDocument(id)}
            >
              Delete Project
            </button>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section bg-green-600 p-4 rounded-md mt-6 w-[500px] mx-auto">
        <h3 className="text-lg font-bold mb-4">Chat</h3>
        <div className="chat-messages max-h-[300px] overflow-y-auto mb-4 bg-green p-4 rounded-md shadow-inner">
          {messages.map((msg) => (
            <div key={msg.id} className="mb-2">
              <p className="text-sm text-gray-900">{msg.text}</p>
              <span className="text-xs text-gray-900">
                {new Date(msg.createdAt?.seconds * 1000).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <div className="chat-input flex gap-2">
          <input
            type="text"
            className="flex-grow p-2 border rounded-md focus:outline-none"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
