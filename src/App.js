import './index';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import { TaskProvider } from './context/tasklist/taskContext';

function App() {
  return (
    <TaskProvider>
    <Fragment>
     <Header/>
     <List/>
     <Footer/>
    </Fragment>
    </TaskProvider>
      
    
  );
}

export default App;