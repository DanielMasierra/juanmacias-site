export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Juan Macías Sierra",
    "url": "https://juanmacias.site",
    "image": "https://juanmacias.site/og-image.svg",
    "jobTitle": "Director de Recursos Humanos y Financieros",
    "worksFor": {
      "@type": "GovernmentOrganization",
      "name": "Contraloría del Estado de Jalisco",
      "url": "https://contraloria.jalisco.gob.mx"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Universidad Nacional Autónoma de México",
        "url": "https://www.unam.mx"
      },
      {
        "@type": "EducationalOrganization",
        "name": "INFOTEC — Centro de Investigación e Innovación en TIC",
        "url": "https://infotec.mx"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Universidad de Guadalajara",
        "url": "https://www.udg.mx"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Academia Mexicana de Ciberseguridad y Derecho Digital (AMCID)"
      },
      {
        "@type": "ResearchOrganization",
        "name": "Línea de Investigación en Derecho e Inteligencia Artificial, IIJ-UNAM",
        "url": "https://www.juridicas.unam.mx"
      }
    ],
    "knowsAbout": [
      "Ética de la Inteligencia Artificial",
      "Gobernanza de Internet",
      "Derecho de las TIC",
      "Protección de Datos",
      "Regulación de la Inteligencia Artificial",
      "Agentes Morales Artificiales",
      "Gobernanza Algorítmica",
      "Ciencia de Datos"
    ],
    "sameAs": [
      "https://linkedin.com/in/juanmaciassierra",
      "https://github.com/DanielMasierra",
      "https://twitter.com/JMaciasSierra"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
