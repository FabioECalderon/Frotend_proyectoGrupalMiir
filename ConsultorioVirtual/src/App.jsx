import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './containers/UserContext';

import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faqs from './pages/Faqs';
import Admin from './pages/Admin';
import LogIn from './pages/LogIn';

function App() {
  return (
    <UserProvider>
      <MainNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
