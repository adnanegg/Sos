import Link from "next/link";

export const metadata = {
  title: "Blog | SOS AMBULANCE Rabat-Salé",
  description:
    "Articles concis sur l'urgence médicale et le transport sanitaire à Rabat-Salé.",
};

const blogs = [
  {
    slug: "urgence-medicale-sale-reflexes-vitaux",
    title: "Urgence Médicale à Salé : Les 3 Réflexes Vitaux Avant l'Ambulance",
    excerpt:
      "Alerter vite, donner les bonnes informations, et appliquer les gestes simples en sécurité.",
    image: "Assets/blog/blog1.jpg",
  },
  {
    slug: "ambulance-prive-vs-ambulance-public",
    title: "Ambulance Privée vs. Ambulance Publique à Salé : Quand Choisir Quoi ?",
    excerpt:
      "Les différences clés pour faire le bon choix selon la situation.",
    image: "Assets/blog/blog2.jpg",
  },
  {
    slug: "tarifs-transport-ambulance-sale",
    title: "Combien Coûte un Transport en Ambulance à Salé ? Le Guide des Tarifs",
    excerpt:
      "Facteurs de prix, fourchettes indicatives et conseils pour bien anticiper.",
    image: "Assets/blog/blog3.jpg",
  },
];

export default function BlogsIndexPage() {
  return (
    <main style={{ padding: "6vh 0" }}>
      <div className="container" style={{ maxWidth: 1080, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: 8 }}>Blog</h1>
        <p style={{ opacity: 0.8, marginBottom: 32 }}>
          Conseils pratiques et repères utiles en situation d'urgence.
        </p>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              style={{
                border: "1px solid #e6ecf7",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease",
              }}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div style={{ cursor: "pointer" }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: "100%", height: 180, objectFit: "cover" }}
                  />
                  <div style={{ padding: "16px" }}>
                    <h2 style={{ fontSize: "1.2rem", margin: "0 0 8px" }}>
                      {blog.title}
                    </h2>
                    <p style={{ opacity: 0.8, fontSize: "0.95rem", margin: 0 }}>
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
