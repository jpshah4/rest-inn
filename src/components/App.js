import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import PropertyListPage from '../pages/PropertyListPage';

import PropertyDesrciptionPage from '../pages/PropertyDesrciptionPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="properties" element={<PropertyListPage />} />
        <Route path="properties/:type" element={<PropertyListPage />} />
        <Route path="properties/select/:id" element={<PropertyDesrciptionPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
