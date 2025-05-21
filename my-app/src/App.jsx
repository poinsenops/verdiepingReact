import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="container mt-16 grow dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/decks" element={<h1>Decks</h1>} />
            <Route path="/newDeck" element={<h1>Make a new deck</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
