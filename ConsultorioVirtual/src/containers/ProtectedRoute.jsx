import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from './UserContext';

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  console.log(user);
  return user ? children : <Navigate to="/home" />;
}
