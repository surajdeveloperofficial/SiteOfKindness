import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: "❤️",
    title: "Share Stories",
    description: "Share your acts of kindness with the community.",
  },
  {
    icon: "📖",
    title: "Read Stories",
    description: "Get inspired by real stories from people around the world.",
  },
  {
    icon: "🌍",
    title: "Volunteer",
    description: "Find opportunities to help people in your community.",
  },
  {
    icon: "🤝",
    title: "Inspire Others",
    description: "Encourage others to spread kindness every day.",
  },
];

function Features() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Why Join SiteOfKindness?"
          subtitle="A place where every small act of kindness creates a positive impact."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-emerald-500"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;