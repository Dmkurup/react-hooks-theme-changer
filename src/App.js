import React,{useState} from 'react';
import Main from './components/Main';
import Header from './components/Header'
import themes from './utils/themes'

const App=() =>{

const [theme,setTheme] =useState(" ");

const handleChange= e =>{ //once the option changes, set the state 
  setTheme(themes[e.value]);
}

//use the state theme value to be applied to the document

const themePicker=node=>{
  if(node){
    theme && Object.keys(theme).forEach(attr=>{
      node.style.setProperty(attr,theme[attr],'important'); //set each attribute in that theme obj to the selected node

      if(attr ==='background-color'){
        document.body.style.background=theme[attr]; //color entire page
      }
    })
  }
}


  return (
    <div ref={themePicker}className="main-section">
      <Header handleChange={handleChange}/>
      <Main/>
    </div>
  );
}

export default App;
