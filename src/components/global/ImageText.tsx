import { Editable } from './Editable';
import { Button, Container, Eyebrow, Section } from './ui';

export type ImageTextProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: string;
  image: string;
  image_alt: string;
  cta_label?: string;
  cta_url?: string;
  reverse?: boolean;
};

export default function ImageText({
  id = 'image-text',
  eyebrow,
  heading,
  body,
  image,
  image_alt,
  cta_label,
  cta_url,
  reverse = false,
}: ImageTextProps) {
  return (
    <Section id={id}>
      <Container>
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <Editable id={`${id}-image`}>
            <img
              src={image}
              alt={image_alt}
              className="aspect-[4/5] w-full rounded-card object-cover"
              data-cms-editable
            />
          </Editable>
          <div>
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
            <Editable id={`${id}-body`}>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{body}</p>
            </Editable>
            {cta_label && cta_url && (
              <div className="mt-6">
                <Button href={cta_url}>{cta_label}</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
