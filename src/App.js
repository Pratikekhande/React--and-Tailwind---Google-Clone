// import logo from './logo.svg';
// import './App.css';

import React,{useState} from 'react';

import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {Rout} from './components/Rout';


function App() {
 const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' :''}>
      {/* <h1 className="text-3xl font-bold underline"> */}
      {/* Hello world! */}


    {/* </h1>  */}
    <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
    <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
    <Rout/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
