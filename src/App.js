import Header from './components/Header';
import Home from './components/Home';
import ListOfArtists from './components/ListOfArtists';
import { Route } from "wouter";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <Route 
          component={ListOfArtists}
          path="/:value/:keyword" 

      />

      
    </div>
  );
}

export default App;
