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
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  render() {
    const page = this.state.showAddForm
      ? <AddBookmark />
      : <BookmarkApp bookmarks={this.state.bookmarks}/>

    return (
      <div className="App">
        { page }
      </div>
    );
  }
}

export default App;