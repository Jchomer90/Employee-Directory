import React, { useState } from "react";
import "./employeeTable.css";

function EmployeeTable(props) {

  const [input, setInput] = useState("");
  const [willSortByAge, setWillSortByAge] = useState(false);
  const storeInput = (e) => {
    setInput(e.target.value);
  };
  const radioAge = (e) => {
    setWillSortByAge(e.target.checked);
    console.log(e.target.checked);
  };

  let employees = (props.employees && props.employees.results) ? [...props.employees.results]:[];
  console.log(employees, props.employees.results)

  if(willSortByAge){
      employees.sort(function (a,b){return a.dob.age-b.dob.age})
  }
  return (
    <div>
      <input onKeyUp={storeInput}></input>
      <input onChange={radioAge} type="checkbox" name="options" id="option1" /> Age
      <div className="row">
        {console.log(props.employees)}
        {employees
            .filter((item) => {
              let fullName = item.name.first + " " + item.name.last;
              return fullName.toLowerCase().includes(input.toLowerCase());
            })
            .map((item) => {
              return (
                <div className="card employeeCard">
                  <div className="card-body">
                  <img src={item.picture.large} class="card-img-top" alt="..." />
                    <h5 className="card-title">
                      {item.name.first} {item.name.last}
                    </h5>
                    <p className="card-text">{item.cell}</p>
                    <p className="card-text">{item.dob.age}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default EmployeeTable;