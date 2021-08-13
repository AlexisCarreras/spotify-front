import Header from './components/Header';
import Home from './components/Home';
import ListOfItems from './components/ListOfItems';
import ArtistProfile from './components/Artist/ArtistProfile';
import { Route } from "wouter";


function App() {
  return (
    <div className="App">
      <Header />
      <Route 
          component={Home}
          path="/" 
      />
      <Route 
          component={ListOfItems}
          path="/:value/:keyword" 
      />
       <Route 
          component={ArtistProfile}
          path="/profile/artist/:id" 
      />
      
    </div>
  );
}

export default App;
