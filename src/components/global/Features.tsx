import { Editable } from './Editable';
import { Container, Eyebrow, Section } from './ui';

export type FeatureItem = {
  icon?: string;
  title: string;
  description: string;
};

export type FeaturesProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: FeatureItem[];
};

export default function Features({
  id = 'features',
  eyebrow,
  heading,
  subheading,
  items = [],
}: FeaturesProps) {
  return (
    <Section id={id} className="bg-surface/50">
      <Container>
        {eyebrow && (
          <Editable id={`${id}-eyebrow`}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Editable>
        )}
        <Editable id={`${id}-heading`}>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {heading}
          </h2>
        </Editable>
        {subheading && (
          <Editable id={`${id}-subheading`}>
            <p className="mt-3 max-w-2xl text-muted">{subheading}</p>
          </Editable>
        )}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Editable key={i} id={`${id}-item-${i}`}>
              <div className="rounded-card border border-primary/10 bg-bg p-6 shadow-sm">
                {item.icon && (
                  <div className="mb-4 text-2xl text-accent" aria-hidden>
                    {item.icon}
                  </div>
                )}
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
