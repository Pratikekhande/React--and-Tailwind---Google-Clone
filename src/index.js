// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { StateContextProvider } from './contexts/StateContextProvider';

// ReactDom.render(
//   <StateContextProvider>
//     <Router>
//       <App />
//     </Router>
//   </StateContextProvider>,
//   document.getElementById('root'),
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//   <React.StrictMode> */}
//     <App />
//   {/* </React.StrictMode>
//   </Router>
//    <StateContextProvider>
//       <Router>
//          <App />
//        </Router>
//      </StateContextProvider>,
//       document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateContextProvider } from './contexts/StateContextProvider';
import './index.css';

ReactDom.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.getElementById('root'),
);
