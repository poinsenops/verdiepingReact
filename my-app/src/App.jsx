import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx';
import { Decks } from './pages/Decks.jsx';
import { NewDeck } from "./pages/NewDeck.jsx";
import { DeckView } from "./pages/DeckView.jsx";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="container mt-16 grow dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900 min-w-screen pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/newDeck" element={<NewDeck />} />
            <Route path="/deck/:deckId/edit" element={<NewDeck />} />
            <Route path="/deck/:deckId" element={<DeckView />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
