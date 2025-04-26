import { useState } from 'react';

const projets = [
  {
    id: 'csharp',
    title: 'Gestionnaire C# WPF',
    desc: 'Application desktop en C# (WPF)…',
    images: ['/csharp1.png', '/csharp2.png'],
  },
  {
    id: 'php',
    title: 'Site PHP dynamique',
    desc: 'Site en PHP/MySQL…',
    images: ['/php1.png', '/php2.png','/php3.png','/php4.png','/php5.png'],
  },
];

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div>
      <h2>Mes projets</h2>
      <div className="projects-grid">
        {projets.map(p => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button
              onClick={() => setSelectedProject(selectedProject === p.id ? null : p.id)}
              className="btn-view"
            >
              {selectedProject === p.id ? 'Masquer le projet' : 'Voir le projet'}
            </button>

            {selectedProject === p.id && (
              <div className="project-images">
                {p.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${p.title} screenshot ${i+1}`}
                    onClick={() => setLightboxSrc(src)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Agrandissement" />
        </div>
      )}
    </div>
  );
}
