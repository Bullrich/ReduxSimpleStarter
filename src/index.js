import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDj6qT1KFIth5IwY6E-jZfjDHLhunmGPJ0';

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
