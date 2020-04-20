import React, { Component } from 'react';
import './App.css';
import PhotosPage from './components/PhotoPage'

class App extends Component {
  render() {
    return (
      <div className="App">
       <PhotosPage></PhotosPage>
      </div>
    );
  }
}

export default App;
