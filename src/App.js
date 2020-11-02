import React from 'react';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Main from './pages/Main';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SerchUser from './components/SerchUser';
import Photos from './components/Photos';
import Albums from './components/Albums';
import Menu from './components/Menu';

function App() {

  return(
    <Router>
      <Menu/>
      <Switch>
        <Route exact path='/posts/:id' component={SinglePost}/>
        <Route exact path="/react-blog-app/posts/:id" component={SinglePost}/>
        <Route exact path='/albums/:id' component={Photos}/>
        <Route exact path='/albums' component={Albums}/>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path="/search-users" component={SerchUser}/>
        <Route exact path="/react-blog-app" component={Main}/>
        <Route exact path='/' component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;