import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './containers/UserContext';

import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faqs from './pages/Faqs';
import Admin from './pages/Admin';
import LogIn from './pages/LogIn';
import AdminCenters from './pages/AdminCenters';
import AdminSpecialties from './pages/AdminSpecialties';
import AdminMedics from './pages/AdminMedics';
import AdminUsers from './pages/AdminUsers';

function App() {
  return (
    <UserProvider>
      <MainNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/admin">
            <Route index element={<Admin />} />
            <Route path="centers" element={<AdminCenters />} />
            <Route path="specialties" element={<AdminSpecialties />} />
            <Route path="medics" element={<AdminMedics />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
          <Route path="/user" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </UserProvider>
  );
}

export default App;
