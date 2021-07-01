import { createContext, useState, useEffect } from 'react'

//importação do 'react-router-dom' para navegação entre páginas
import { BrowserRouter, Route, Switch} from 'react-router-dom';
 
//importação das páginas
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { auth, firebase } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;