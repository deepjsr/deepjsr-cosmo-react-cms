import { Editable } from './Editable';
import { Button, Container, Eyebrow, Section } from './ui';

export type CtaProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  cta_label?: string;
  cta_url?: string;
  note?: string;
};

export default function Cta({
  id = 'cta',
  eyebrow,
  heading,
  subheading,
  cta_label,
  cta_url,
  note,
}: CtaProps) {
  return (
    <Section id={id} className="bg-primary text-primary-foreground">
      <Container className="text-center">
        {eyebrow && (
          <Editable id={`${id}-eyebrow`}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              {eyebrow}
            </span>
          </Editable>
        )}
        <Editable id={`${id}-heading`}>
          <h2 className="mt-3 font-display text-3xl text-primary-foreground sm:text-5xl">
            {heading}
          </h2>
        </Editable>
        {subheading && (
          <Editable id={`${id}-subheading`}>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              {subheading}
            </p>
          </Editable>
        )}
        {cta_label && cta_url && (
          <div className="mt-8 flex justify-center">
            <Button
              href={cta_url}
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              {cta_label}
            </Button>
          </div>
        )}
        {note && (
          <Editable id={`${id}-note`}>
            <p className="mt-4 text-xs text-primary-foreground/60">{note}</p>
          </Editable>
        )}
      </Container>
    </Section>
  );
}
