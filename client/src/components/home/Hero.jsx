import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            🌍 Welcome to SiteOfKindness
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight">
            Making
            <span className="text-emerald-400"> Kindness </span>
            Visible
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Share inspiring stories, appreciate people,
            and spread kindness around the world.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Get Started</Button>

            <Button variant="secondary">
              Explore Stories
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;