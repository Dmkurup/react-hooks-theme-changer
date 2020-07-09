import React from 'react';
import DropDown from './DropDown'
const Header = ({handleChange}) => {
    return (
        <header>
            <DropDown handleChange={handleChange}/>
        </header>     
      );
}
 
export default Header;