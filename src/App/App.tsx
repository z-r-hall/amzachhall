import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from '../NavBar/Nav';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
