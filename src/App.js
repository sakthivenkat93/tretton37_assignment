import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeCard from './EmployeeCard';
import { useSelector, useDispatch } from 'react-redux';
import { setEmployees} from './EmployeeSlice';

require('dotenv').config()

const App = () => {
  let [filterName, setFilterName] = useState();
  let [filterOffice, setFilterOffice] = useState();
  const employees = useSelector((state) => state.employees.value);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.1337co.de/v3/employees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_SERVER_API_KEY
      },
    }).then(response => response.json())
      .then(data => {
        console.log('Success');
        dispatch(setEmployees(data));
      })
  }, []);

  return (
    <div className="App">
      <div className="AppHeader">
        The fellowship of the tretton37
      </div>
      <div className="AppBody">
        <div className="FilterArea">
          <span>
            <input id="FilterByName" className="TextBox" type="text" placeholder="Filter By Name" onChange={e => setFilterName(e.target.value)}></input>
            <input id="FilterByOffice" className="TextBox" type="text" placeholder="Filter By Office" onChange={e => setFilterOffice(e.target.value)}></input>
          </span>
        </div>
        <div className="EmployeeCardCollection">
          {employees ? employees.filter(employee => filterName ? employee.name.toLowerCase().includes(filterName.toLowerCase()) : true).filter(employee => filterOffice ? employee.office.toLowerCase().includes(filterOffice.toLowerCase()) : true).map((Employee, index) => <EmployeeCard key={index} Employee={Employee}></EmployeeCard>):'Loading'}
        </div>
      </div>
    </div>
  );
}

export default App;
