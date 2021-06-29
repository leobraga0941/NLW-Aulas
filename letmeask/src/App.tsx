import { createContext, useState, useEffect } from 'react'

//importação do 'react-router-dom' para navegação entre páginas
import { BrowserRouter, Route} from 'react-router-dom';
 
//importação das páginas
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
