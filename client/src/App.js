import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SongsList from "./components/SongsList";
import Song from "./components/Song";
import AuthorsList from "./components/AuthorsList";
import Author from "./components/Author";
import {AuthorsData} from "./json data/authors.data";
import "./App.css";
import {useContext} from "react";
import {SongsContext} from "./context/SongsContext";
import SettingsScreen from "./components/SettingsScreen";

function App() {
  const SongsData = useContext(SongsContext);
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={() => <SongsList />} />
          <Route path="/song/:id" component={Song} />
          <Route
            exact
            path="/authors"
            component={() => <AuthorsList authors={AuthorsData} />}
          />
          <Route path="/author/:id" component={Author} />
          <Route path="/settings" component={SettingsScreen} />
          <Route
            component={() => (
              <div>
                <h1>Página no encontrada...</h1>
              </div>
            )}
          />
        </Switch>
      </main>
      <footer>danieltkach@gmail.com</footer>
    </div>
  );
}

export default App;
