import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SongsList from "./components/SongsList/SongsList";
import Song from "./components/Song/Song";
import {SongsData} from "../src/songs.data.js";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <SongsList songs={SongsData} />} />
          <Route exact path="/songs" component={() => <SongsList songs={SongsData} />} />
          <Route path="/song/:id" component={Song} />
          <Route
            component={() => (
              <div>
                <h1>Página no encontrada...</h1>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
