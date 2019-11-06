import React, {useState} from 'react';
import Button from './button/Button';
import './App.scss';



function App() {
const [link,setLink] = useState('');
const [currentTheme,setCurrentTheme] = useState('');


  return (
    <div className="App">
     
     <Button 
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
     <select>
        <option value="success" onClick={(e)=> {
          setCurrentTheme(e.target.value)
        }}>Success theme</option>
        <option value="warning" onClick={(e)=> {
          setCurrentTheme(e.target.value)
        }} >Warning theme</option>
        <option value="error" onClick={(e)=> {
          setCurrentTheme(e.target.value)
        }}>Error theme</option>
      </select>
    </div>
  );
}

export default App;
