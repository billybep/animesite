import { Route, Switch } from 'react-router-dom'
import AnimeNav from './components/Navbar'
import AnimeList from './pages/AnimeList'
import AnimeDetail from './pages/AnimeDetail.jsx'
import AnimeFavorite from './pages/AnimeFavorite'
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimeNav />
      <Switch>
        <Route exact path="/">
          <AnimeList />
        </Route>
        <Route path="/anime/:id" render={ _ => <AnimeDetail /> } />
        <Route path="/favorite" render={ _ => <AnimeFavorite /> } />
      </Switch>
    </div>
  );
}

export default App;
