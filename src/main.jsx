import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Items from './pages/Items.jsx';
import Auth from './pages/Auth.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './reset.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Index />} />

      <Route path="items" element={<Items />} />

      <Route element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
