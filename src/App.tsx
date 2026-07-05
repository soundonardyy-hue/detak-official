import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sectors from './Sectors';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music-tech" element={<Sectors />} />
      </Routes>
    </Router>
  );
}
