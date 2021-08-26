import Header from './components/Header';
import Home from './components/Home';

import LogIn from './components/Login/LogIn';
import SignUp from './components/Login/SignUp';

import ListOfItems from './components/ListOfItems';
import ArtistProfile from './components/Artist/ArtistProfile';
import TrackProfile from './components/Track/TrackProfile';
import AlbumProfile from './components/Album/AlbumProfile';
// import Favorites from './components/Favorites/Favorites';
import PageNotFound from './components/PageNotFound';
import { Route, Switch } from "wouter";
import FavoritesProfile from './components/Favorites/FavoritesProfile';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route 
              exact
              component={LogIn}
              path="/" 
        />
        <Route 
              exact
              component={SignUp}
              path="/signup" 
        />
        <Route 
            exact
            component={Home}
            path="/home" 
        />
        <Route
            exact 
            component={ListOfItems}
            path="/:value/:keyword" 
        />
        <Route 
            exact
            component={ArtistProfile}
            path="/profile/artist/:id" 
        />
        <Route 
            exact
            component={TrackProfile}
            path="/profile/track/:id" 
        />
        <Route 
            exact
            component={AlbumProfile}
            path="/profile/album/:id" 
        />
        <Route 
            exact
            component={FavoritesProfile}
            path="/favorites" 
        />
        <Route 
          exact 
          component={PageNotFound}
        />
      </Switch>  

    </div>
  );
}

export default App;
