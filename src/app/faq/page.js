export const metadata = {
  title: "FAQ | SOS Ambulance Rabat-Salé",
  description: "Questions fréquentes sur nos services d'ambulance et d'assistance.",
};

const faqs = [
  {
    q: "Intervenez-vous 24h/24 et 7j/7 ?",
    a: "Oui, nos équipes sont disponibles en permanence dans la région Rabat-Salé.",
  },
  {
    q: "Quels types de transports proposez-vous ?",
    a: "Transport médicalisé, interventions d'urgence et assistance aux patients.",
  },
  {
    q: "Comment réserver une ambulance ?",
    a: "Appelez-nous directement ou contactez-nous via WhatsApp pour une réponse rapide.",
  },
  {
    q: "Quels sont vos tarifs ?",
    a: "Les tarifs dépendent de la distance, du niveau d'assistance et de l'urgence. Nous proposons un devis transparent avant intervention.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <section className="faq-hero">
        <div className="container">
          <h1>FAQ</h1>
          <p>Trouvez des réponses rapides à vos questions.</p>
        </div>
      </section>

      <section className="faq-list">
        <div className="container">
          {faqs.map((item, idx) => (
            <details key={idx} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}


