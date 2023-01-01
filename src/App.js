import { Routes, Route } from 'react-router-dom';
import About from './about/components/About';
import './App.css';
import Home from './home/components/Home';
import Projects from './projects/components/Projects';

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
