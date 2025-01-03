import React from "react";

function Create() {
  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <form style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="projectName"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Project name
          </label>
          <input
            type="text"
            id="projectName"
            placeholder="write project name here"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="projectDescription"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Project description
          </label>
          <textarea
            id="projectDescription"
            placeholder="Type here"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
            }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="dueDate"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Set due to
          </label>
          <input
            type="date"
            id="dueDate"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <select
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          >
            <option value="" disabled selected>
              Select...
            </option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <select
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          >
            <option value="" disabled selected>
              Select...
            </option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#6200ea",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add project
        </button>
      </form>
    </div>
  );
}

export default Create;
