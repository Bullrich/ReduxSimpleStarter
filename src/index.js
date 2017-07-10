import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'API_KEY';

// Create a new component
const App = () => {
    return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
