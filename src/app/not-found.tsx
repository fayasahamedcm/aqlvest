import { ButtonLink, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <Eyebrow>404 / A little off course</Eyebrow>
      <h1>Let’s find a clearer path.</h1>
      <p>
        The page you’re looking for isn’t here. The learning library is a good
        place to start.
      </p>
      <div className="hero-actions">
        <ButtonLink href="/learn">Explore the library</ButtonLink>
        <ButtonLink href="/" secondary>
          Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
