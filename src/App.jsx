import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Items from './pages/Items.jsx';
import AddItem from './pages/AddItem.jsx';
import Auth from './pages/Auth.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './reset.css';
import './color.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />

        <Route path="items" element={<Items />} />

        <Route path="additem" element={<AddItem />} />

        <Route element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
