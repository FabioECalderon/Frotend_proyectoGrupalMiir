import { Routes, Route } from 'react-router-dom';

import MainNav from './components/MainNav';
import Home from './pages/Home';
import Faqs from './pages/Faqs';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
