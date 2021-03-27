import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          {/* root path or path="/" should always be last route meaning if you have no where to go, it will by-default take you to your root-page */}
          <Route path="/"> 
            <Home />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
