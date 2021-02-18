import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application/Application';

ReactDOM.render(<Application />, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept('./app.jsx', () => {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//   });
// }
