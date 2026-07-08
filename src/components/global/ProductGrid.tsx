import { Editable } from './Editable';
import { Button, Container, Eyebrow, Section } from './ui';

export type Product = {
  name: string;
  price: string;
  image: string;
  image_alt: string;
  description?: string;
  url?: string;
};

export type ProductGridProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  products: Product[];
};

export default function ProductGrid({
  id = 'products',
  eyebrow,
  heading,
  subheading,
  products = [],
}: ProductGridProps) {
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
          {products.map((p, i) => (
            <Editable key={i} id={`${id}-product-${i}`}>
              <a
                href={p.url || '#'}
                className="group block overflow-hidden rounded-card bg-bg shadow-sm transition hover:shadow-md"
              >
                <img
                  src={p.image}
                  alt={p.image_alt}
                  className="aspect-square w-full object-cover"
                  data-cms-editable
                />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg text-ink">{p.name}</h3>
                    <span className="text-sm font-medium text-accent">
                      {p.price}
                    </span>
                  </div>
                  {p.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  )}
                </div>
              </a>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
