import Container from "../common/Container";
import Button from "../common/Button";

function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-16 text-center shadow-xl">

          <h2 className="text-4xl font-bold text-white">
            Ready to Spread Kindness?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-100">
            Every small act of kindness creates a ripple effect.
            Join our community and inspire people across the world.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button>
              Join Now
            </Button>

            <Button variant="secondary">
              Read Stories
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default CTA;