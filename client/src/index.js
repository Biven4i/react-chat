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
import { io } from "socket.io-client";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/index';

const store = configureStore({
  reducer: rootReducer,
});
const socket = io("http://localhost:9000");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="chat" element={<Chat socket={socket} />} />
          <Route path="home" element={<Home socket={socket} />} />
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
        </Route>
      </Routes>
    </Router>
  </Provider>
);