import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from "./components/Auth/AuthProvider";

import Header from './components/Header';
import Home from './components/Home';

import LogIn from './components/Login/LogIn';
import SignUp from './components/Login/SignUp';

import ListOfItems from './components/ListOfItems';
import ArtistProfile from './components/Artist/ArtistProfile';
import TrackProfile from './components/Track/TrackProfile';
import AlbumProfile from './components/Album/AlbumProfile';
import PageNotFound from './components/PageNotFound';
import FavoritesProfile from './components/Favorites/FavoritesProfile';
import PrivateRoute from './components/Routers/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
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
                component={AlbumProfile}
                path="/profile/album/:id" 
            />

            <PrivateRoute 
                exact
                component={TrackProfile}
                path="/profile/track/:id" 
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
      </Router>
    </AuthProvider>
  );
}

export default App;
