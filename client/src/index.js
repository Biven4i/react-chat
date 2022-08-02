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
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
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
  </Provider>
);