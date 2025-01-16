import { useSelector } from "react-redux";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";

const filters = [
  "all",
  "mine",
  "frontend",
  "backend",
  "design",
  "marketing",
  "others",
];

function ProjectFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <div role="tablist" className="tabs tabs-bordered">
      {filters.map((filter) => {
        return (
          <a
            onClick={() => {
              setCurrentFilter(filter);
              changeFilter(filter);
            }}
            key={filter}
            role="tab"
            className={`tab ${currentFilter == filter ? "tab-active" : ""}`}
          >
            {filter}
          </a>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
