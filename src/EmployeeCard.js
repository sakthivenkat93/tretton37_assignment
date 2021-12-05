import React from "react";
import './EmployeeCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGitSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
const EmployeeCard = (props) => {
    return(
        <div className="EmployeeCard">
            <div className="ImageContainer">
                <div className="Image" style={{background:`url(${props.Employee.imagePortraitUrl}) no-repeat center`}}>
                </div>
            </div>
            <div className="EmployeeContact">
                <div className="EmployeeName">
                    {props.Employee.name}
                </div>
                <div className="EmployeeLinks">
                <a href={`https://linkedin.com/${props.Employee.linkedIn}`}><FontAwesomeIcon icon={faLinkedin} color="#000000"/></a>
                <a href={`https://github.com/${props.Employee.gitHub}`}><FontAwesomeIcon icon={faGitSquare} color="#000000"/></a>
                <a href={`https://twitter.com/${props.Employee.twitter}`}><FontAwesomeIcon icon={faTwitterSquare} color="#000000"/></a>
                </div>
            </div>
            <div className="EmployeeLocation">
                Office: {props.Employee.office}
            </div>
        </div>
    );
}

export default EmployeeCard;