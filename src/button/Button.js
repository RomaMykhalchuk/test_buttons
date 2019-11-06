import React from 'react';
import './Button.scss';
import './_size/button_size_s.scss';
import './_size/button_size_m.scss';
import './_size/button_size_l.scss';
import './_link/button_link_default.scss';
import './_color-theme/button_color-theme_success.scss';
import './_color-theme/button_color-theme_error.scss';
import './_color-theme/button_color-theme_warning.scss';



const Button = props => {
  let currentThemeMode = "";
  let currentSize = "";
  let currentLink = props.isLink;
  
switch (props.colorTheme) {
    case "success":
      currentThemeMode = "button_color-theme_success";
      break;
    case "warning":
      currentThemeMode = "button_color-theme_warning";
      break;
    case "error":
      currentThemeMode = "button_color-theme_error";
      break;
    default:
      currentThemeMode = "button";
  }
  switch (props.buttonSize) {
    case "small":
      currentSize = "button_size_s";
      break;
    case "medium":
      currentSize = "button_size_m";
      break;
    case "large":
      currentSize = "button_size_l";
      break;
    default:
      currentSize = "button";
  }

  return (
    <div> 
    
      <button className={`button ${currentThemeMode} ${currentSize}`}>
   {currentLink ? <a href = 'https://football.ua/' className='button_link_default'>Click</a> : 'Click'}
      </button>
    </div>
  );
};

export default Button;