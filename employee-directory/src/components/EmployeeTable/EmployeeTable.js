import React, { useState } from "react";
import "./EmployeeTable.css";

function EmployeeTable(props) {

  const [input, setInput] = useState("");
  const [willSortByAge, setWillSortByAge] = useState(false);
  const storeInput = (e) => {
    setInput(e.target.value);
  };
  const employeeAge = (e) => {
    setWillSortByAge(e.target.checked);
    console.log(e.target.checked);
  };

  let employees = (props.employees && props.employees.results) ? [...props.employees.results]:[];
  console.log(employees, props.employees.results)

  if(willSortByAge){
      employees.sort(function (a,b){return a.dob.age-b.dob.age})
  }
  
  return (
    <div className="container container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 class="display-4">Your Company</h1>
        <nav className="navbar navbar-light bg-light border border-dark">
        <a class="navbar-brand">Employee Directory</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" placeholder="Filter by Name" onKeyUp={storeInput} />
            <input className="form-control mr-sm-2" onChange={employeeAge} type="checkbox" name="options" id="option1" /> Sort by Age
          </form>
        </nav>
        </div>
      </div>
      <div className="row">
        {console.log(props.employees)}
        {employees
            .filter((item) => {
              let fullName = item.name.first + " " + item.name.last;
              return fullName.toLowerCase().includes(input.toLowerCase());
            })
            .map((item) => {
              return (
                <div className="card border-dark mb-3 employeeCard">
                  <div className="card-body">
                  <img src={item.picture.large} className="card-img-top image" alt="..." />
                    <h5 className="card-title">
                      {item.name.first} {item.name.last}
                    </h5>
                    <p className="card-text">Phone: {item.cell}</p>
                    <p className="card-text"><a href={item.email}>{item.email}</a></p>
                    <p className="card-text">Age: {item.dob.age}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default EmployeeTable;