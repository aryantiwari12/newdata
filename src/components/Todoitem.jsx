import React from "react";
import deleteicon from "../components/img/delete.png";

function Todoitem(props) {
  const { taskname, date, id, handleDelete, handleStatus , handleDeleted} = props;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  return (
    <>
    
      <div className="col">
        <div className=" h-100 shadow-lg rounded">
          <div className="card-body ">
            <div className="d-flex  ">
              <h5
                style={{ width: "200px" }}
                className="card-title text-danger "
              >
                {capitalizeFirstLetter(taskname)}
              </h5>
              <button
                className="bg-success text-light rounded text-center"
                style={{
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  height: "25px",
                }}
                onClick={() => handleStatus(id)}
              >
                mark done
              </button>
             
            </div>
            <div className="d-flex">
              <p className="card-text text-muted my-2  fw-bolder ">{date}</p>
              <img
                style={{ marginLeft: "50%", height: "35px", cursor: "pointer" }}
                // onClick={() => handleDelete(id)}
                onClick={() => handleDeleted(id)}
                src={deleteicon}
                alt="delete "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
