import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Projets from './components/Projets';
import Stages from './components/Stages';
import Competences from './components/Competences';
import Veille from './components/Veille';

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/stages">Stages</Link>
        <Link to="/competences">Compétences</Link>
        <Link to="/veille">Veille</Link>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/veille" element={<Veille />} />
        </Routes>
      </main>
    </Router>
  );
}
