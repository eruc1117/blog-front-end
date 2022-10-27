import React from 'react';
import { Helmet } from 'react-helmet';

import BasicNavbar from './UI/Navbar/BasicNavbar';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: #424242; }'}</style>
        </Helmet>
        <div className='main-body'>
          <BasicNavbar/>
        </div>
      </div>
    )
  }
}

export default App;
