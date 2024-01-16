import logo from './logo.svg';
import Nav from './components/Navbar';
import Example from './components/Contact';
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
        </Route>
        <Route path="/contact" element={<Example />}>
        </Route>
        <Route path="/" element={<Nav />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
