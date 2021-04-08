import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SongsList from "./components/SongsList";
import Song from "./components/Song";
import AuthorsList from "./components/AuthorsList";
import Author from "./components/Author";
import {SongsData} from "../src/songs.data.js";
import {AuthorsData} from "../src/authors.data.js";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={() => <SongsList songs={SongsData} />} />
          <Route path="/song/:id" component={Song} />
          <Route exact path="/authors" component={() => <AuthorsList authors={AuthorsData} />} />
          <Route path="/author/:id" component={Author} />
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
