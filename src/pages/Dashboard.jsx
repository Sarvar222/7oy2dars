import { useCollection } from "../hooks/useCollection";
import { ProjectList, ProjectFilter } from "../components";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Dashboard() {
  const { user } = useGlobalContext();
  const { documents } = useCollection("projects");
  const [filter, setFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const projects = documents
    ? documents.filter((doc) => {
        switch (filter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            doc.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "frontend":
          case "backend":
          case "design":
          case "marketing":
          case "others":
            return doc.category === filter;
          default:
            return true;
        }
      })
    : null;

  if (!documents) {
    return (
      <div className="align-elements">
        <h1 className="text-2xl font-medium md:text-3xl">Loading...</h1>
      </div>
    );
  }
  return (
    <section>
      <div className="align-elements">
        {documents && (
          <h1 className="text-center mt-12 text-2xl font-medium md:mb-20 md:text-3xl">
            Dashboard
          </h1>
        )}
        {documents.length ? <ProjectFilter changeFilter={changeFilter} /> : ""}
      </div>
    </section>
  );
}

export default Dashboard;
