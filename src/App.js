import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store, { persistor } from './redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage, Portfolio, ViewCoin } from 'Pages';
import Navbar from 'Components/NavbarComponents/Navbar'
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/portfolio' Component={Portfolio} />
            <Route path='/coin/:slug' Component={ViewCoin} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
