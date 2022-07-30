import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './index.css';
import App from './App';
import Chat from './components/Chat/Chat';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="chat" element={<Chat />} />
        <Route path="home" element={<Home />} />
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
      </Route>
    </Routes>
  </Router>
);