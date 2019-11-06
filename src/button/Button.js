import React from 'react';
import './Button.scss';
import './_size/button_size_s.scss';
import './_link/button_link_default.scss';
import './_color-theme/button_color-theme_success.scss'

const Button = (props) => {




  return(
  <div>
    
    <button className='button'>
     
      {props.isLink === 'link' ? 
      <a href="https://football.ua/" className="button button_link_default">Click</a> : 'Click'}
     
    </button>
  </div>)
};

export default Button;