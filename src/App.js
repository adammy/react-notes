import React, { Component } from 'react';
import Nav from './components/Nav';
import NotebookList from './components/NotebookList';
import './App.css';

class App extends Component {

  render() {
    return (
			<div>
				<Nav />
				<NotebookList />
			</div>
    );
  }
	
}

export default App;
