import React, { Component } from 'react';
import './App.css';

import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';


const bookmarks = [
  {
  title:"Google",
  url:"http://www.google.com", 
  rating:"3", 
  description:"No evil"
  },
  {
    title:"Google",
    url:"http://www.google.com", 
    rating:"3", 
    description:"No evil"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddBookmark />
        <BookmarkApp bookmarks={bookmarks}/>
        
      </div>
    );
  }
}

export default App;