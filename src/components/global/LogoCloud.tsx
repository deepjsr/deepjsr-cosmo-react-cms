import { Editable } from './Editable';
import { Container, Eyebrow, Section } from './ui';

export type Logo = {
  name: string;
  image: string;
  image_alt: string;
  url?: string;
};

export type LogoCloudProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  logos: Logo[];
};

export default function LogoCloud({
  id = 'logos',
  eyebrow,
  heading,
  logos = [],
}: LogoCloudProps) {
  return (
    <Section id={id} className="py-12">
      <Container>
        {eyebrow && (
          <Editable id={`${id}-eyebrow`}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Editable>
        )}
        {heading && (
          <Editable id={`${id}-heading`}>
            <h2 className="mt-3 text-center font-display text-2xl text-muted">
              {heading}
            </h2>
          </Editable>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 opacity-80">
          {logos.map((logo, i) => (
            <Editable key={i} id={`${id}-logo-${i}`}>
              <a href={logo.url || '#'} className="block" data-cms-editable>
                <img
                  src={logo.image}
                  alt={logo.image_alt}
                  className="h-10 w-auto object-contain grayscale"
                  data-cms-editable
                />
              </a>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
