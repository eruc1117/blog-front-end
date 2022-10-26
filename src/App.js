import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './UI/Navbar/Navbar';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: #424242; }'}</style>
        </Helmet>
        <div className='main-body'>
          <Navbar/>
        </div>
      </div>
    )
  }
}

export default App;
