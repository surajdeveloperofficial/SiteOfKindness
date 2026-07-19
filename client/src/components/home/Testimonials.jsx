import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Volunteer",
    message:
      "SiteOfKindness inspired me to help people in my local community every weekend.",
  },
  {
    name: "Priya Mehta",
    role: "Student",
    message:
      "Reading kindness stories here reminds me that even small actions can make a big difference.",
  },
  {
    name: "Rahul Verma",
    role: "Teacher",
    message:
      "This platform is a daily source of positivity and motivation for my students.",
  },
];

function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="What People Say"
          subtitle="Real experiences from our growing community."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-slate-300 italic">
                "{item.message}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-emerald-400">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;