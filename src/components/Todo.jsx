import React from "react";
import { useState, useEffect } from "react";
import AddNewTaskModal from "./AddNewTaskModal";
import AddTodo from "./AddTodo";
import Todoitem from "./Todoitem";
import axios from "axios";
import Pagination from "./Pagination";

function Todo() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);


  const addData = async () => {
    fetch(`http://139.59.47.49:4004/api/tasks?limit=20&start=1`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("get data",json.rows);
        setData(json.rows);
        // addData()
        
      })
      .catch(err => console.log(err));
  };

  const handleInProgress = async () => {
    fetch("http://139.59.47.49:4004/api/tasks?limit=10&start=1&status=1")
      .then((response) => response.json())
      .then((json) => {
        // console.log("handle in porgress",json.rows);
        setData(json.rows);
      });
  };

  const handleComplete = async () => {
    fetch(`http://139.59.47.49:4004/api/tasks?limit=10&start=1&status=2`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("handle complete", json.rows);
        setData(json.rows);
        
      });
  };
  const handleDelete = async (id) => {
    fetch(`http://139.59.47.49:4004/api/task/delete/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("delete", resp);
        addData()
      });
    });
  };

  const handleStatus = async (id) => {
    const postData = {
      id,
      status: 2,
    };
    axios
      .post(`http://139.59.47.49:4004/api/task/status`, postData)
      .then((response) => {
        // console.log(response);
        // handleComplete()
        // addData()
      });
  };

  const handleDeleted = async (id) => {
    const postData = {
      id,
      status:0,
    };
    axios
      .post(`http://139.59.47.49:4004/api/task/status`, postData)
      .then((response) => {
        console.log(response);
      });
  }
  const handleStatusDeleted = async () => {
    fetch(`http://139.59.47.49:4004/api/tasks?limit=10&start=1&status=0`)
      .then((response) => response.json())
      .then((json) => {
        console.log("handle deleted", json.rows);
        setData(json.rows);
        
      });
  };

  useEffect(() => {
    addData();
    // handleInProgress();
    // handleComplete();
    // handleStatus();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <AddTodo
      handleStatusDeleted={handleStatusDeleted}
        addData={addData}
        handleComplete={handleComplete}
        handleInProgress={handleInProgress}
      />
      <AddNewTaskModal addData={addData}  />
      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
      <div
        style={{ marginLeft: "20%", marginTop: "-28%", marginRight: "3%" }}
        className="row  row-cols-md-3 g-4"
      >
        {currentPosts.map((items) => {
          return (
            <Todoitem
              key={items.id}
              id={items.id}
              taskname={items.task_name}
              date={items.date}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
              handleDeleted={handleDeleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
