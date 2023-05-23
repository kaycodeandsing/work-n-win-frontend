import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import "../Styles/main.css";
import DropdownItem from "./DropdownItem";

import {useState, useEffect, useRef} from "react";


export default function NavBar() {
  
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return()=>{
            document.removeEventListener("mousedown", handler);
        }
    });

  return (

    <div className = "navBar">
        <Link to="/toDos" className="title">Work-N-Win</Link>
        <div className="menu-container" ref={menuRef}>
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                <FaBars className="fabars"/>
            </div>

            <div className={`dropdown-menu ${open? 'active': 'inactive'}`} >
                <ul>
                    <DropdownItem text = {"Home"}/>
                    <DropdownItem text = {"Completed Task"}/>
                    <DropdownItem text = {"Donate"}/>
                    <DropdownItem text = {"Helpful Companies"}/>
                    <DropdownItem text = {"About Us"}/>
                </ul>
            </div>
        </div>
    </div> 
  );
}
