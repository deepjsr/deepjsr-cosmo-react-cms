import { Editable } from './Editable';
import { Button, Container, Eyebrow } from './ui';

export type HeroProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  image_alt: string;
  cta_label?: string;
  cta_url?: string;
  secondary_label?: string;
  secondary_url?: string;
};

export default function Hero({
  id = 'hero',
  eyebrow,
  title,
  subtitle,
  image,
  image_alt,
  cta_label,
  cta_url,
  secondary_label,
  secondary_url,
}: HeroProps) {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 px-5 py-16 sm:px-8 lg:order-1 lg:py-24">
          <Container className="!px-0">
            {eyebrow && (
              <Editable id={`${id}-eyebrow`}>
                <Eyebrow>{eyebrow}</Eyebrow>
              </Editable>
            )}
            <Editable id={`${id}-title`}>
              <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
                {title}
              </h1>
            </Editable>
            {subtitle && (
              <Editable id={`${id}-subtitle`}>
                <p className="mt-6 max-w-md text-lg text-muted">{subtitle}</p>
              </Editable>
            )}
            {(cta_label && cta_url) && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={cta_url}>{cta_label}</Button>
                {secondary_label && secondary_url && (
                  <Button href={secondary_url} variant="outline">
                    {secondary_label}
                  </Button>
                )}
              </div>
            )}
          </Container>
        </div>
        <div className="order-1 lg:order-2">
          <Editable id={`${id}-image`}>
            <img
              src={image}
              alt={image_alt}
              className="h-[28rem] w-full object-cover lg:h-screen"
              data-cms-editable
            />
          </Editable>
        </div>
      </div>
    </section>
  );
}
