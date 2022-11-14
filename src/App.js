import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} /> */}
      </Routes>
      <Navbar />
      <CountriesList />
    </div>
  );
}

export default App;
