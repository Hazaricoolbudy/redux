import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Edmission
        </a>
        <Navbar />
      </div>
    </header>
  );
}

export default App;
