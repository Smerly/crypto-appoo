import './App.css';
// Dependency Imports
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// Component Imports
import LandingPage from './LandingPage/LandingPage'
import Navbar from './Navbar/Navbar'
import Portfolio from './Portfolio/Portfolio'
import ViewCoin from './DisplayCoins/ViewCoin'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} Component={LandingPage}/>
          <Route path={'/portfolio'} Component={Portfolio} />
          <Route path={'/coin/:slug'} Component={ViewCoin} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
