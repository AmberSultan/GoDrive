import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import About from './pages/About';
import Book from './pages/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<About/>} />
          <Route path='/book-a-car' element={<Book/>} />
   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
