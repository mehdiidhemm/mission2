import { useState } from 'react';

const stages = [
  {
    id: 'HOYA',
    title: '1ere année',
    image: ['/hoya.webp'],
    summary: 'Stage de 6 semaines à Émerainville',
    details: [
      'Visite usine.',
      'Retouche en HTML CSS du tableau de bord de Hoya.',
      'Installation de postes pour les nouveaux arrivants.',
      'Configuration de boitiers relié à un logiciel cablé en réseau.',
      'Prendre des montures, les disposer dans un appareil relié à un logiciel afin de calculer les dimensions de celles-ci.',
      'Installation de postes pour les nouveaux arrivants.',
      'Assistance de problèmes survenus sur certaines machines en production.',
      
    ],
  },
  {
    id: 'SAS Manay',
    title: '2ème année',
    image: null,  // pas d’image pour ce stage
    summary: 'Stage de 6 semaines à Épinay-sur-Orge',
    details: [
      'Création de modules PHP avec ERP.',
      'Retoucher la bdd en fonction des modules externes à générer.',
      'Analyse et retouche des fichiers à modifier pour des modules builders externes à se créer selon ce que le tuteur voulait.',
    ],
  },
];

export default function Stages() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container">
      <h2>Mes stages</h2>
      <div className="stages-grid">
        {stages.map((s) => (
          <div key={s.id} className="stage-card">
            {s.image && (
              <img
                src={s.image}
                alt={s.title}
                className="stage-image"
              />
            )}
            <div className="stage-content">
              <h3>{s.title}</h3>
              <p><em>{s.summary}</em></p>
              <button
                className="btn"
                onClick={() => toggle(s.id)}
              >
                {expanded[s.id] ? 'Réduire' : 'Voir les détails'}
              </button>
              {expanded[s.id] && (
                <ul className="stage-details">
                  {s.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
