import React from 'react';
import Select from 'react-select';
import themes from '../utils/themes';
const DropDown = ({handleChange}) => { 
    let options=[];

    Object.keys(themes).forEach(theme=>{
        options.push({
            value:theme,
            label:theme.charAt(0).toUpperCase()+theme.slice(1)
        })
    })
    return ( 
    <div className="theme-dropdown">
        <Select
        onChange={handleChange}
        options={options}
        />
    </div> );
}
 
export default DropDown;