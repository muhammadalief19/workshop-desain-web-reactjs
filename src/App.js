import './App.css';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card2 from './components/Card2';
function App() {
  return (
    <div class="w-full py-20">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="latihan" element={<Card2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
