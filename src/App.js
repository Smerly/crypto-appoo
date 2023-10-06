import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage, Portfolio, ViewCoin } from './Pages';
import Navbar from './Components/NavbarComponents/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={LandingPage}/>
          <Route path='/portfolio' Component={Portfolio} />
          <Route path='/coin/:slug' Component={ViewCoin} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
