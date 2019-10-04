import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

class DropdownMenu extends React.Component{
    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle>Menu</Dropdown.Toggle>
                <Dropdown.Menu> 
                    <Dropdown.Item>
                        <NavLink exact to="/CC" >Currency Converter</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink to="/Win">Win!</NavLink>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
export default DropdownMenu;
