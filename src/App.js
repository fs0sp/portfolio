import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/components/Home';
import Projects from './projects/components/Projects';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
