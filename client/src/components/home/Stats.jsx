import Container from "../common/Container";

const stats = [
  {
    number: "10K+",
    label: "Stories Shared",
  },
  {
    number: "500+",
    label: "Volunteers",
  },
  {
    number: "50+",
    label: "Countries",
  },
  {
    number: "100+",
    label: "Daily Acts",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-slate-900">
      <Container>
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-5xl font-bold text-emerald-400">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;