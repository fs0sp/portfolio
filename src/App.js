import { Routes, Route } from 'react-router-dom';
import About from './features/about/components/About';
import './App.css';
import Home from './features/home/components/Home';
import Projects from './features/projects/components/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
