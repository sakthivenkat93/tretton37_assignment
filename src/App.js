import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeCard from './EmployeeCard';

require('dotenv').config()

const App = () => {
  let [Employees, setEmployees] = useState([]);

  fetch('https://api.1337co.de/v3/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_SERVER_API_KEY
    },
  }).then(response => response.json())
    .then(data => {
      console.log('Success:', setEmployees(data));
    })

  const listItems = Employees.map((Employee, index) =>
    <EmployeeCard key={index} Employee={Employee}></EmployeeCard>
  );

  return (
    <div className="App">
      <div className="AppHeader">
        The fellowship of the tretton37
      </div>
      <div className="AppBody">
        <div className="FilterArea">
          <span>
            Potential Filter and Tools Area
          </span>
        </div>
        <div className="EmployeeCardCollection">
          {listItems.length > 0 ? listItems : <div className="LoadingPlaceHolder">Loading</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
