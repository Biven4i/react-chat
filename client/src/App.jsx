import Header from './components/Header/Header';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Chat /> */}
      <Home />
    </div>
  );
}

export default App;
