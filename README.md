
In this project, I tried to realize Nested approach of file storage. Button component was considered as a BLOCK (so ‘block/’ is a root directory). Button.js is a component implementation of button block, Button.scss includes the default style of the button (such as event states (hover, active and disabled), font-family, background color etc.). So as our button has 3 sizes, different color themes and could have a link mode, I added '/_size', '/_link' and '/_color-theme' subdirectories with button block modifiers.

To create this app I used ‘create-react-app’ instrument. Node – sass library allows to compile .scss files into .css. To change the appearance of the button I used react hooks. The state of the button is keeping in variables:

  - link – empty string on default. By clicking the changing mode radio buttons we grab the value, call setLink(), refresh the current state and pass it as a property to Button component. If the passed property is not empty, we add the <a></a> tag with default style and with a link ('football.ua' by default);
  - currentTheme and currentSize hold the states which we could grab from dropdown – list. In a switch statement we match the passed props with corresponding style class. To update the button’s style corresponding modifiers (currentSize, currentThemeMode) will be reflected in className attribute of our button.    






### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
