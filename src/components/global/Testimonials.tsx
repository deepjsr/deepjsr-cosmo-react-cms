import { Editable } from './Editable';
import { Container, Eyebrow, Section } from './ui';

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
  image_alt?: string;
};

export type TestimonialsProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: Testimonial[];
};

export default function Testimonials({
  id = 'testimonials',
  eyebrow,
  heading,
  subheading,
  items = [],
}: TestimonialsProps) {
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
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <Editable key={i} id={`${id}-item-${i}`}>
              <figure className="flex h-full flex-col rounded-card bg-bg p-6 shadow-sm">
                <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.avatar && (
                    <img
                      src={t.avatar}
                      alt={t.image_alt || t.name}
                      className="h-12 w-12 rounded-full object-cover"
                      data-cms-editable
                    />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      {t.name}
                    </div>
                    {t.role && (
                      <div className="text-xs text-muted">{t.role}</div>
                    )}
                  </div>
                </figcaption>
              </figure>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
