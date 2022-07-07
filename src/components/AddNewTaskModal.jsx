import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import addnewtask from "./img/add_new_task.png";

function AddNewTaskModal({ addData }) {
  const [task_name, setTaskName] = useState("");
  const [date, setDate] = useState("");

  function onCreatePost() {
    // e.preventDefault();
    const postData = {
      task_name,
      date,
    };
    axios
      .post(`http://139.59.47.49:4004/api/task`, postData)
      .then((response) => {
        // console.log(response);
      });
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCreatePost();
          setDate("");
          setTaskName("");
        }}
      >
        <div
          className="modal fade"
          id="exampleModal01"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div
              style={{ backgroundColor: "antiquewhite" }}
              className="modal-content "
            >
              <div className="modal-header" style={{ margin: "0 30%" }}>
                <img src={addnewtask} alt="h" />
                <h5 className="modal-title  text-danger" id="exampleModalLabel">
                  Add New Task
                </h5>
              </div>
              <div className="container text-danger my-3">
                <h5>Task name</h5>
                <input
                
                  placeholder="Enter task here"
                  style={{
                    width: "100%",
                    outline: "none",
                    borderRadius: "7px",
                  }}
                  type="text"
                  value={task_name}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <h5>Date</h5>

                <input
                  style={{
                    width: "100%",
                    outline: "none",
                    borderRadius: "7px",
                  }}
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  onClick={() => 
                    addData
                  }
                  className="modal-btn btn-primary w-100 btn "
                  // disabled={task_name.length < 5}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddNewTaskModal;
