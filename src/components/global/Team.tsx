import { Editable } from './Editable';
import { Container, Eyebrow, Section } from './ui';

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  image_alt: string;
};

export type TeamProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  members: TeamMember[];
};

export default function Team({
  id = 'team',
  eyebrow,
  heading,
  subheading,
  members = [],
}: TeamProps) {
  return (
    <Section id={id} className="bg-surface/40">
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Editable key={i} id={`${id}-member-${i}`}>
              <div className="text-center">
                <img
                  src={m.image}
                  alt={m.image_alt}
                  className="mx-auto aspect-square w-40 rounded-full object-cover"
                  data-cms-editable
                />
                <h3 className="mt-4 font-display text-xl text-ink">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </div>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
