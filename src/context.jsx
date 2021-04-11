import React from "react";
import {SongsData} from "./songs.data";
const SongsContext = React.createContext(SongsData);

const SongsContextProvider = ({children}) => (
  <SongsContext.Provider value={SongsData}>{children}</SongsContext.Provider>
);

export {SongsContextProvider, SongsContext};
