import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import Items from './pages/Items';
import ItemProduct from './pages/ItemProduct';
import AddItem from './pages/AddItem';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './reset.css';
import './color.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />

          <Route path="items">
            <Route index element={<Items />} />
            <Route path=":productId" element={<ItemProduct />} />
          </Route>

          <Route path="additem" element={<AddItem />} />

          <Route element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
