import { Editable } from './Editable';
import { Button, Container, Eyebrow, Section } from './ui';

export type Plan = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta_label?: string;
  cta_url?: string;
  featured?: boolean;
};

export type PricingProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  plans: Plan[];
};

export default function Pricing({
  id = 'pricing',
  eyebrow,
  heading,
  subheading,
  plans = [],
}: PricingProps) {
  return (
    <Section id={id}>
      <Container>
        {eyebrow && (
          <Editable id={`${id}-eyebrow`}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Editable>
        )}
        <Editable id={`${id}-heading`}>
          <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl">
            {heading}
          </h2>
        </Editable>
        {subheading && (
          <Editable id={`${id}-subheading`}>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              {subheading}
            </p>
          </Editable>
        )}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Editable key={i} id={`${id}-plan-${i}`}>
              <div
                className={`flex h-full flex-col rounded-card border p-8 ${
                  plan.featured
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-primary/15 bg-bg'
                }`}
              >
                <h3
                  className={`font-display text-2xl ${
                    plan.featured ? 'text-primary-foreground' : 'text-ink'
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.description && (
                  <p
                    className={`mt-2 text-sm ${
                      plan.featured ? 'text-primary-foreground/80' : 'text-muted'
                    }`}
                  >
                    {plan.description}
                  </p>
                )}
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-4xl ${
                      plan.featured ? 'text-primary-foreground' : 'text-ink'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-primary-foreground/70' : 'text-muted'
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ✦
                      </span>
                      <span
                        className={
                          plan.featured ? 'text-primary-foreground/90' : 'text-ink'
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                {plan.cta_label && plan.cta_url && (
                  <div className="mt-8">
                    <Button
                      href={plan.cta_url}
                      variant={plan.featured ? 'outline' : 'primary'}
                      className={plan.featured ? 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary' : ''}
                    >
                      {plan.cta_label}
                    </Button>
                  </div>
                )}
              </div>
            </Editable>
          ))}
        </div>
      </Container>
    </Section>
  );
}
