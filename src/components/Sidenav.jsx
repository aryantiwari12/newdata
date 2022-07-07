import React from "react";
import "./css/addtodo.css";

function Sidenav({ addData, handleStatusDeleted }) {

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
      <div className="sidenav ">
        <div className=" row text-center mx-3 ">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="img"
            style={{
              height: "55px",
              width: "80px",
              marginTop: "10px",
              marginLeft: "30%",
            }}
          ></img>
          <p style={{ fontWeight: "bold" }} className="my-2">
            Jerry Luis
          </p>

          <p style={{ fontSize: "13px" }}>jerryluis123@gmail.com</p>
          <button
            onClick={() => {
              addData()
            }}
            className="btn-home-delete my-3"
          >
            Home
          </button>
            {/* <ul className="d-flex btnincomp text-center ">
                <li className="active ">

                  <a style={{width:'200px'}}  onClick={() => {
                    addData();
                  }}  >Home</a>
                  </li>
                 
              </ul>
           */}
          <button  onClick={() => {
              handleStatusDeleted()
            }} className="btn-home-delete">Deleted Task</button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
