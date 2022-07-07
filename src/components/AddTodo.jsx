import React from "react";
import "./css/addtodo.css";
import Sidenav from "./Sidenav";
const AddTodo = ({ handleInProgress, handleComplete, addData, handleStatusDeleted }) => {

  let ul = document.querySelector('ul');
  let li = document.querySelectorAll('li');

  li.forEach(el => {
    el.addEventListener('click', function(){
      ul.querySelector('.active').classList.remove('active');
      el.classList.add('active');
    })
  })
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidenav addData={addData} handleStatusDeleted={handleStatusDeleted}/>
          </div>
          <div className="col-6 col-md-10">
            <div className="col-12  task-section">
              <div className="d-flex " style={{ margin: "0 5%" }}>
                <h4 className="my-3">Tasks</h4>
                <button
                  className="btn-addtask my-3  "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal01"
                  style={{ marginTop: "6px", color: "white" }}
                >
                  Add New Task
                </button>
              </div>
              <div className="ul-div">

              <ul className="d-flex btnincomp text-center ">
                <li className="active ">

                  <a style={{width:'200px'}}  onClick={() => {
                    handleInProgress();
                  }}  >in progress</a>
                  </li>
                  <li><a style={{width:'200px'}} onClick={() => {
                    handleComplete();
                  }}  >complete</a>
                </li>
              </ul>
                  </div>

              {/* <div className="d-flex btnincomp">
                <button
                  onClick={() => {
                    handleInProgress();
                  }}
                  
                  className="btn-in-comp btn-progress"
                >
                  In-Progress
                </button>
                <button
                  onClick={() => {
                    handleComplete();
                  }}
                  className="btn-in-comp btn-complete"
                >
                  Completed
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
