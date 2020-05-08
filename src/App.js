import React from 'react';
import LayoutComponent from './Components/Layout';

import StoriesProvider from './Providers/StoriesProvider/StoriesProvider';

import './App.scss';

function App() {
  return (
    <div className="App">
      <StoriesProvider>
        <LayoutComponent />
      </StoriesProvider>
    </div>
  );
}

export default App;
