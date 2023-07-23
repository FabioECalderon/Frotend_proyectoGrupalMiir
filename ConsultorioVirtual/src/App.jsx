import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './containers/UserContext';
import ProtectedRoute from './containers/ProtectedRoute';

import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faqs from './pages/Faqs';
import Admin from './pages/Admin';
import LogIn from './pages/LogIn';
import SearchResults from './pages/SearchResults';
import AdminCenters from './pages/AdminCenters';
import AdminSpecialties from './pages/AdminSpecialties';
import AdminMedics from './pages/AdminMedics';
import AdminUsers from './pages/AdminUsers';
import PasswordRestore from './pages/PasswordRestore';
import CheckoutForm from './pages/checkoutForm';

function App() {
  return (
    <UserProvider>
      <MainNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/restore" element={<PasswordRestore />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/checkoutForm" element={<CheckoutForm />} />

          <Route path="/admin">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="centers"
              element={
                <ProtectedRoute>
                  <AdminCenters />
                </ProtectedRoute>
              }
            />
            <Route
              path="specialties"
              element={
                <ProtectedRoute>
                  <AdminSpecialties />
                </ProtectedRoute>
              }
            />
            <Route
              path="medics"
              element={
                <ProtectedRoute>
                  <AdminMedics />
                </ProtectedRoute>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedRoute>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
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
