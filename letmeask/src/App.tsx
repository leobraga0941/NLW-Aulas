//importação do 'react-router-dom' para navegação entre páginas
import { BrowserRouter, Route} from 'react-router-dom';
 
//importação das páginas
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
