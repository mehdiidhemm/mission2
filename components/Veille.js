// src/components/Veille.js
import { useState } from 'react';
import './Veille.css';

const sections = [
  {
    id: 'intro',
    title: 'Introduction',
    content: `L’Intelligence Artificielle (IA) transforme profondément divers secteurs de notre vie quotidienne. De la gestion de larges ensembles de données à la résolution de problèmes complexes, elle occupe une place clé dans la transformation de nombreux domaines. C’est le cas dans le divertissement interactif, avec notamment l’intégration de l’IA dans les jeux vidéo.`
  },
  {
    id: 'definition',
    title: "Qu'est-ce que l'IA dans les jeux vidéo ?",
    content: `Le terme Intelligence Artificielle dans les jeux vidéo fait référence à des algorithmes et des techniques informatiques, robotiques, infographiques et de contrôle. Les premiers jeux vidéo de 1950/1960 comprenaient des éléments primitifs d’IA. Elle se limitait généralement à des modèles de comportement basiques, comme dans le jeu de dames ou d’échecs. Dans les années 1970, des jeux comme Pong et Space Invaders ont commencé à incorporer des éléments d’IA. Il s’agissait alors de contrôler le comportement des adversaires ou des obstacles.`
  },
  {
    id: 'evolution',
    title: 'Evolution des méthodes IA',
    content: `Au fil des années, les avancées technologiques et l’évolution des capacités de calcul ont permis des progrès significatifs dans le domaine du jeu vidéo. Grâce à des algorithmes d’IA plus sophistiqués, des comportements réalistes ont émergé dans les jeux de rôle, de stratégie en temps réel et de tir à la première personne. Les expériences de jeu sont devenues plus immersives et engageantes. Plus récemment, le Machine Learning et le Reinforcement Learning ont multiplié les capacités de l’IA.`
  },
  {
    id: 'intervention',
    title: "Comment l'IA intervient-elle ?",
    content: `• Personnages non joueurs (PNJ) autonomes et réalistes.
• Modélisation de l’espace des états pour prise de décision.
• Pathfinding efficace (algorithmes A*, Dijkstra).
• Approche ad-hoc pour comportements sur-mesure.
• Adaptation dynamique du niveau de difficulté.`
  },
  {
    id: 'advantages',
    title: 'Avantages et limites',
    content: `Avantages:
• Gameplay plus riche et immersif.
• Réduction du temps de développement via génération procédurale.
• Personnalisation en temps réel de l'expérience.

Limites:
• Mondes virtuels de plus en plus exigeants.
• Risque de comportements prévisibles ou sociaux appauvris.`
  },
  {
    id: 'future',
    title: "L'avenir de l'IA dans les jeux vidéo",
    content: `L’IA aide à concevoir des avatars conversationnels (Nvidia ACE), améliore la VR/AR, et ouvre des perspectives pour des interactions naturelles et immersives. Les compétences en IA dans le jeu vidéo sont très recherchées: Data Scientist, Game AI Engineer, etc.`
  }
];

export default function Veille() {
  const [openSection, setOpenSection] = useState('');
  const toggle = (id) => setOpenSection(openSection === id ? '' : id);

  return (
    <div className="veille-page">
      <header className="veille-header">
        <h2>IA & Jeux Vidéo</h2>
        <p>Comment l’IA redéfinit le gameplay, l’immersion et la création de mondes ?</p>
      </header>

      <div className="accordion">
        {sections.map((sec) => (
          <div key={sec.id} className="accordion-item">
            <button
              className={`accordion-header ${openSection === sec.id ? 'open' : ''}`}
              onClick={() => toggle(sec.id)}
            >
              {sec.title}
              <span className="icon">{openSection === sec.id ? '–' : '+'}</span>
            </button>
            <div className={`accordion-content ${openSection === sec.id ? 'open' : ''}`}>
              <div className="accordion-text">
                {sec.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}