import React, {useState} from 'react';
import Button from './button/Button';
import './App.scss';



function App() {
const [link,setLink] = useState('');
const [currentTheme,setCurrentTheme] = useState('');
const [currentSize, setCurrentSize] = useState('');

  return (
    <div className="App">
     
     <Button 
      buttonSize={currentSize}
      isLink={link}
      colorTheme = {currentTheme}/>
     <input type="radio" id="radioButton1" name="a" value="link" onClick = {(e)=>{
       setLink(e.target.value);
     }}/>
    <label htmlFor="radioButton1">Set the button as a link</label>
     <input type="radio" id="radioButton2" name="a" value="not link" onClick = {(e)=>{
       setLink(e.target.value);
     }}/>
     <label htmlFor="radioButton2">Set the button as not a link</label> 
     <select onChange={(e)=>{setCurrentTheme(e.target.value)
     }}>
        <option value="success">Success theme</option>
        <option value="warning">Warning theme</option>
        <option value="error">Error theme</option>
      </select>
     <select onChange={(e)=>{
       setCurrentSize(e.target.value);
     }}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
     </select>
    </div>
  );
}

export default App;
