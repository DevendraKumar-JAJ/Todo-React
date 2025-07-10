import { useState } from "react";
import "./App.css";
import handleNewjob from "./components/handleNewjob.js";
import { delJob, MarkDone } from "./components/del-markdone.js";
import { v4 as uuid } from "uuid";

function App() {
  const [list, SetList] = useState([]);
  let newJob = list[-1];
  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => {
            newJob = e.target.value;
          }}
        />
        <button
          type="submit"
          onClick={() => handleNewjob(list, newJob, SetList)}
        >
          Add
        </button>
      </div>
      <div>{listPrint(list, SetList)}</div>
    </>
  );
}

function listPrint(list, SetList) {
  return (
    <>
      <p>Mark as Done</p>
      <ul type="none">
        {list.map((ele, index) => {
          if (ele.done == false) {
            return doneButton(list, SetList, ele);
          }
        })}{" "}
      </ul>
      <p>Completed Task</p>
      <ul type="none">
        {list.map((ele, index) => {
          if (ele.done == true) {
            return delButton(list, SetList, ele);
          }
        })}{" "}
      </ul>
    </>
  );
}

function doneButton(list, SetList, ele) {
  return (
    <>
      <li key={uuid()}>
        {ele.name}{" "}
        <button onClick={() => MarkDone(list, ele.name, SetList)}>
          <i className="fa-solid fa-check"></i>
        </button>
      </li>{" "}
    </>
  );
}

function delButton(list, SetList, ele) {
  return (
    <>
      <li key={uuid()}>
        {ele.name}{" "}
        <button onClick={() => delJob(list, ele.name, SetList)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>{" "}
    </>
  );
}
export default App;
